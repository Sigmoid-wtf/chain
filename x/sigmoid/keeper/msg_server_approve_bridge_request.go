package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) ApproveBridgeRequest(goCtx context.Context, msg *types.MsgApproveBridgeRequest) (*types.MsgApproveBridgeRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	_, found := k.GetBridgeRequest(ctx, &msg.Address)
	if !found {
		return nil, sdkerrors.ErrInvalidAddress
	}

	k.RemoveBridgeRequest(ctx, &msg.Address)

	return &types.MsgApproveBridgeRequestResponse{}, nil
}
