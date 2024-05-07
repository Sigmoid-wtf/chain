package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateBridgeRequest(goCtx context.Context, msg *types.MsgCreateBridgeRequest) (*types.MsgCreateBridgeRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateBridgeRequestResponse{}, nil
}
