package keeper

import (
	"context"

	"sigmoid-test/x/sigmoidtest/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ApproveUnstakeRequest(goCtx context.Context, msg *types.MsgApproveUnstakeRequest) (*types.MsgApproveUnstakeRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgApproveUnstakeRequestResponse{}, nil
}
