package keeper

import (
	"context"

	"sigmoid-test/x/sigmoidtest/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetLastProcessed(goCtx context.Context, req *types.QueryGetLastProcessedRequest) (*types.QueryGetLastProcessedResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	return &types.QueryGetLastProcessedResponse{TransactionId: k.GetLastProcessedTransaction(ctx)}, nil
}
