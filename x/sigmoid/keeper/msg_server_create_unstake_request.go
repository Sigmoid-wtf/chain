package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateUnstakeRequest(goCtx context.Context, msg *types.MsgCreateUnstakeRequest) (*types.MsgCreateUnstakeRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateUnstakeRequestResponse{}, nil
}
