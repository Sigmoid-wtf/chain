package keeper

import (
	"context"

	"sigmoid-test/x/sigmoidtest/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetFrontStakeRequest(goCtx context.Context, req *types.QueryGetFrontStakeRequestRequest) (*types.QueryGetFrontStakeRequestResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.RequestsByMintAddressKey(req.Creator)))

	var totalData []types.FrontStakeRequest
	pageRes, err := query.Paginate(store, req.Pagination, func(key []byte, value []byte) error {
		var data types.FrontStakeRequest
		if err := k.cdc.Unmarshal(value, &data); err != nil {
			return err
		}

		totalData = append(totalData, data)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetFrontStakeRequestResponse{
		FrontStakeRequest: totalData,
		Pagination:        pageRes,
	}, nil
}
