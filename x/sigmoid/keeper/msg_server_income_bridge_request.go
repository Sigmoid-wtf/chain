package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) IncomeBridgeRequest(goCtx context.Context, msg *types.MsgIncomeBridgeRequest) (*types.MsgIncomeBridgeRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgIncomeBridgeRequestResponse{}, nil
}
