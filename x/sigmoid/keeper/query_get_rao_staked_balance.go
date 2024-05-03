package keeper

import (
	"context"
	"strconv"

	"sigmoid/x/sigmoid/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetRaoStakedBalance(goCtx context.Context, req *types.QueryGetRaoStakedBalanceRequest) (*types.QueryGetRaoStakedBalanceResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.RaoStakedBalance))

	var stakedBalance uint64 = 0
	if store.Has([]byte("key")) {
		var err error
		stakedBalance, err = strconv.ParseUint(string(store.Get([]byte("key"))), 10, 64)
		if err != nil {
			return &types.QueryGetRaoStakedBalanceResponse{}, err
		}
	}

	return &types.QueryGetRaoStakedBalanceResponse{RaoStakedBalance: stakedBalance}, nil
}
