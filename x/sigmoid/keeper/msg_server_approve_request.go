package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	"cosmossdk.io/math"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) ApproveRequest(goCtx context.Context, msg *types.MsgApproveRequest) (*types.MsgApproveRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	request, found := k.Keeper.GetRequest(ctx, &msg.SenderAddress)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	coin := sdk.NewCoin("sigTAO", math.NewInt(int64(request.Amount)))
	coins := sdk.NewCoins(coin)
	err := k.Keeper.bankKeeper.MintCoins(ctx, "mint", coins)
	if err != nil {
		return nil, sdkerrors.ErrInvalidCoins
	}
	address := sdk.MustAccAddressFromBech32(request.MintAddress)
	err = k.Keeper.bankKeeper.SendCoinsFromModuleToAccount(ctx, "mint", address, coins)
	if err != nil {
		return nil, sdkerrors.ErrInvalidCoins
	}

	k.Keeper.SetLastProcessedTransaction(ctx, msg.TransactionId)
	k.Keeper.RemoveRequest(ctx, &msg.SenderAddress)

	return &types.MsgApproveRequestResponse{}, nil
}