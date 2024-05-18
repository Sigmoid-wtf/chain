package keeper

import (
	"context"
	"time"

	"sigmoid/x/sigmoid/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateRequest(goCtx context.Context, msg *types.MsgCreateRequest) (*types.MsgCreateRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)
	tsNow := time.Now()

	request := &types.Request{
		SenderAddress: msg.SenderAddress,
		MintAddress:   msg.Creator,
		Amount:        msg.Amount,
		Status:        0,
		Timestamp:     uint64(tsNow.Unix()),
	}

	oldRequest, found := k.Keeper.GetRequest(ctx, &msg.SenderAddress)
	if found {
		oldRequestTs := time.Unix(int64(oldRequest.Timestamp), 0)
		if tsNow.Sub(oldRequestTs) < time.Minute*15 {
			return nil, sdkerrors.ErrConflict
		}
	}

	_, found = k.Keeper.GetRequestInReversedStore(ctx, msg.Creator)
	if found {
		return nil, sdkerrors.ErrInvalidAddress
	}

	k.Keeper.AppendRequest(ctx, request)
	return &types.MsgCreateRequestResponse{}, nil
}
