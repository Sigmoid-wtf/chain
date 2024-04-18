package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateUnstakeRequest(goCtx context.Context, msg *types.MsgCreateUnstakeRequest) (*types.MsgCreateUnstakeRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if msg.Creator != msg.UnstakeAddress {
		return nil, sdkerrors.ErrInvalidAddress
	}

	if _, found := k.GetUnstakeRequest(ctx, &msg.UnstakeAddress); found {
		return nil, sdkerrors.ErrConflict
	}

	k.AppendUnstakeRequest(ctx, msg)

	return &types.MsgCreateUnstakeRequestResponse{}, nil
}
