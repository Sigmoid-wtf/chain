package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SetLatestProcessedEthBlock(goCtx context.Context, msg *types.MsgSetLatestProcessedEthBlock) (*types.MsgSetLatestProcessedEthBlockResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSetLatestProcessedEthBlockResponse{}, nil
}
