package keeper

import (
	"context"

	"sigmoid-test/x/sigmoidtest/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) ProcessTransaction(goCtx context.Context, msg *types.MsgProcessTransaction) (*types.MsgProcessTransactionResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgProcessTransactionResponse{}, nil
}