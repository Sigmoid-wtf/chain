package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SetRaoCurrentStakedBalance(goCtx context.Context, msg *types.MsgSetRaoCurrentStakedBalance) (*types.MsgSetRaoCurrentStakedBalanceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	k.Keeper.setRaoCurrentStakedBalance(ctx, msg.RaoCurrentStakedBalance)

	return &types.MsgSetRaoCurrentStakedBalanceResponse{}, nil
}
