package keeper

import (
	"context"

	"sigmoid-test/x/sigmoidtest/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateRequest(goCtx context.Context, msg *types.MsgCreateRequest) (*types.MsgCreateRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	request := &types.Request{
		SenderAddress: msg.SenderAddress,
		MintAddress:   msg.Creator,
		Amount:        int32(msg.Amount),
		Status:        0,
	}

	k.Keeper.AppendRequest(ctx, request)
	return &types.MsgCreateRequestResponse{}, nil
}
