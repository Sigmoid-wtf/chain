package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ApproveBridgeRequest(goCtx context.Context, msg *types.MsgApproveBridgeRequest) (*types.MsgApproveBridgeRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgApproveBridgeRequestResponse{}, nil
}
