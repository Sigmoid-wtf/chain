package keeper

import (
	"context"

	"sigmoid-test/x/sigmoidtest/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateRequest(goCtx context.Context, msg *types.MsgCreateRequest) (*types.MsgCreateRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	address := sdk.MustAccAddressFromBech32(msg.Creator)
	request := &types.Request{
		SenderAddress: msg.SenderAddress,
		MintAddress:   string(address),
		Amount:        msg.Amount,
		Status:        0,
	}

	k.Keeper.AppendRequest(ctx, request)
	return &types.MsgCreateRequestResponse{}, nil
}
