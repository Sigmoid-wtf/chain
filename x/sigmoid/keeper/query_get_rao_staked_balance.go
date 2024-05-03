package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetRaoStakedBalance(goCtx context.Context, req *types.QueryGetRaoStakedBalanceRequest) (*types.QueryGetRaoStakedBalanceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	return &types.QueryGetRaoStakedBalanceResponse{RaoStakedBalance: k.getRaoStakedBalance(ctx)}, nil
}
