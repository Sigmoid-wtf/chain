package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	"cosmossdk.io/math"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) ApproveUnstakeRequest(goCtx context.Context, msg *types.MsgApproveUnstakeRequest) (*types.MsgApproveUnstakeRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	value, found := k.GetUnstakeRequest(ctx, &msg.Creator)
	if !found {
		return nil, sdkerrors.ErrInvalidAddress
	}

	k.Keeper.setRaoStakedBalance(ctx, k.Keeper.getRaoStakedBalance(ctx)-value.Amount)

	address := sdk.MustAccAddressFromBech32(msg.Creator)
	coin := sdk.NewCoin("sigRAO", math.NewIntFromUint64(value.Amount))
	coins := sdk.NewCoins(coin)
	k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, address, "gov", coins)
	k.Keeper.bankKeeper.BurnCoins(ctx, "gov", coins)

	k.RemoveUnstakeRequest(ctx, &msg.Creator)

	return &types.MsgApproveUnstakeRequestResponse{}, nil
}
