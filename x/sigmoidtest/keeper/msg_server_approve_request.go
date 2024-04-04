package keeper

import (
	"context"

	"sigmoid-test/x/sigmoidtest/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) ApproveRequest(goCtx context.Context, msg *types.MsgApproveRequest) (*types.MsgApproveRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, found := k.Keeper.GetRequest(ctx, &msg.SenderAddress)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	// coin := sdk.NewCoin("sigTAO", math.NewInt(int64(request.Amount)))
	// coins := sdk.NewCoins(coin)
	// err := k.Keeper.bankKeeper.MintCoins(ctx, types.ModuleName, coins)
	// if err != nil {
	// 	return nil, sdkerrors.ErrInvalidCoins
	// }
	// k.Keeper.bankKeeper.SendCoinsFromModuleToAccount(ctx, types.ModuleName, sdk.AccAddress(request.MintAddress), coins)

	k.Keeper.SetLastProcessedTransaction(ctx, &msg.TransactionId)
	k.Keeper.RemoveRequest(ctx, &msg.SenderAddress)

	return &types.MsgApproveRequestResponse{}, nil
}
