package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetSigtaoRateD(goCtx context.Context, req *types.QueryGetSigtaoRateDRequest) (*types.QueryGetSigtaoRateDResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	return &types.QueryGetSigtaoRateDResponse{SigtaoRateD: k.getSigTaoRateD(ctx)}, nil
}
