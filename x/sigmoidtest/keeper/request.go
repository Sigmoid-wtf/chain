package keeper

import (
	"sigmoid-test/x/sigmoidtest/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) AppendRequest(ctx sdk.Context, request *types.Request) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.PendingRequestsKey))

	appendedValue := k.cdc.MustMarshal(request)
	store.Set([]byte(request.SenderAddress), appendedValue)
}

func (k Keeper) SetLastProcessedTransaction(ctx sdk.Context, tx *string) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.LastProcessedKey))

	store.Set([]byte{}, []byte(*tx))
}

func (k Keeper) GetLastProcessedTransaction(ctx sdk.Context) string {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.LastProcessedKey))

	val := store.Get([]byte{})
	return string(val)
}

func (k Keeper) GetRequest(ctx sdk.Context, senderAddress *string) (value types.Request, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.PendingRequestsKey))

	bin := store.Get([]byte(*senderAddress))
	if bin == nil {
		return value, false
	}

	k.cdc.MustUnmarshal(bin, &value)
	return value, true
}
