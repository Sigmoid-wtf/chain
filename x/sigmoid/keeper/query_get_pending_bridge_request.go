package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetPendingBridgeRequest(goCtx context.Context, req *types.QueryGetPendingBridgeRequestRequest) (*types.QueryGetPendingBridgeRequestResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.PendingBridgeRequestsKey))
	iterator := store.Iterator(nil, nil)
	defer iterator.Close()

	var bridgeRequest types.MsgCreateBridgeRequest
	for ; iterator.Valid(); iterator.Next() {
		if iterator.Error() != nil {
			return nil, iterator.Error()
		}

		k.cdc.MustUnmarshal(iterator.Value(), &bridgeRequest)
		break
	}

	return &types.QueryGetPendingBridgeRequestResponse{Request: &bridgeRequest}, nil
}
