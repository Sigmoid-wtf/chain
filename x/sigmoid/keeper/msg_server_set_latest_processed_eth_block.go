package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SetLatestProcessedEthBlock(goCtx context.Context, msg *types.MsgSetLatestProcessedEthBlock) (*types.MsgSetLatestProcessedEthBlockResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	k.Keeper.SetLatestProcessedEthBlock(ctx, msg.BlockNumber)

	return &types.MsgSetLatestProcessedEthBlockResponse{}, nil
}
