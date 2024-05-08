package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateRequestSigned(goCtx context.Context, msg *types.MsgCreateRequestSigned) (*types.MsgCreateRequestSignedResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateRequestSignedResponse{}, nil
}
