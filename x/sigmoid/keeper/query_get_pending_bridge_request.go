package keeper

import (
	"context"

    "sigmoid/x/sigmoid/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetPendingBridgeRequest(goCtx context.Context,  req *types.QueryGetPendingBridgeRequestRequest) (*types.QueryGetPendingBridgeRequestResponse, error) {
	if req == nil {
        return nil, status.Error(codes.InvalidArgument, "invalid request")
    }

	ctx := sdk.UnwrapSDKContext(goCtx)

    // TODO: Process the query
    _ = ctx

	return &types.QueryGetPendingBridgeRequestResponse{}, nil
}
