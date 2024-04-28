package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetFrontPendingStakeRequest(goCtx context.Context, req *types.QueryGetFrontPendingStakeRequestRequest) (*types.QueryGetFrontPendingStakeRequestResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	senderAddress, found := k.GetRequestInReversedStore(ctx, req.Address)
	if !found {
		return nil, sdkerrors.ErrInvalidAddress
	}

	request, found := k.GetRequest(ctx, &senderAddress)
	if !found {
		return nil, sdkerrors.ErrInvalidAddress
	}

	return &types.QueryGetFrontPendingStakeRequestResponse{
		Request: &request,
	}, nil
}
