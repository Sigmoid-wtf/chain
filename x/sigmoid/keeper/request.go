package keeper

import (
	"sigmoid/x/sigmoid/types"
	"strconv"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) SetLastProcessedTransaction(ctx sdk.Context, tx string) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.LastProcessedKey))

	store.Set([]byte("key"), []byte(tx))
}

func (k Keeper) GetLastProcessedTransaction(ctx sdk.Context) string {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.LastProcessedKey))

	val := store.Get([]byte("key"))
	return string(val)
}

func (k Keeper) AppendRequest(ctx sdk.Context, request *types.Request) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.PendingRequestsKey))

	appendedValue := k.cdc.MustMarshal(request)
	store.Set([]byte(request.SenderAddress), appendedValue)
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

func (k Keeper) RemoveRequest(ctx sdk.Context, senderAddress *string) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.PendingRequestsKey))

	store.Delete([]byte(*senderAddress))
}

func (k Keeper) GetUnstakeRequest(ctx sdk.Context, address *string) (value types.MsgCreateUnstakeRequest, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.UnstakeRequestsKey))

	bin := store.Get([]byte(*address))
	if bin == nil {
		return value, false
	}
	k.cdc.MustUnmarshal(bin, &value)
	return value, true
}

func (k Keeper) AppendUnstakeRequest(ctx sdk.Context, request *types.MsgCreateUnstakeRequest) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.UnstakeRequestsKey))

	store.Set([]byte(request.Creator), k.cdc.MustMarshal(request))
}

func (k Keeper) RemoveUnstakeRequest(ctx sdk.Context, address *string) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.UnstakeRequestsKey))

	store.Delete([]byte(*address))
}

func (k Keeper) setRaoCurrentStakedBalance(ctx sdk.Context, rao uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.RaoCurrentStakedBalance))

	store.Set([]byte("key"), []byte(strconv.FormatUint(rao, 10)))
}

func (k Keeper) getRaoCurrentStakedBalance(ctx sdk.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.RaoCurrentStakedBalance))

	if store.Has([]byte("key")) {
		rao, _ := strconv.ParseUint(string(store.Get([]byte("key"))), 10, 64)
		return rao
	}
	return 0
}

func (k Keeper) setRaoStakedBalance(ctx sdk.Context, rao uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.RaoStakedBalance))

	store.Set([]byte("key"), []byte(strconv.FormatUint(rao, 10)))
}

func (k Keeper) getRaoStakedBalance(ctx sdk.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.RaoStakedBalance))

	if store.Has([]byte("key")) {
		rao, _ := strconv.ParseUint(string(store.Get([]byte("key"))), 10, 64)
		return rao
	}
	return 0
}

func (k Keeper) setSigRaoCount(ctx sdk.Context, sigRao uint64) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SigRaoCount))

	store.Set([]byte("key"), []byte(strconv.FormatUint(sigRao, 10)))
}

func (k Keeper) getSigRaoCount(ctx sdk.Context) uint64 {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.SigRaoCount))

	if store.Has([]byte("key")) {
		sigRao, _ := strconv.ParseUint(string(store.Get([]byte("key"))), 10, 64)
		return sigRao
	}
	return 0
}

func (k Keeper) getSigTaoRateD(ctx sdk.Context) uint64 {
	raoStakedBalance := k.getRaoStakedBalance(ctx)
	raoCurrentStakedBalance := k.getRaoCurrentStakedBalance(ctx)
	sigRaoCount := k.getSigRaoCount(ctx)

	if sigRaoCount != 0 {
		return (raoStakedBalance + raoCurrentStakedBalance*9) * 1000000000 / 10 / sigRaoCount
	}
	return 1000000000
}

func (k Keeper) GetBridgeRequest(ctx sdk.Context, address *string) (value types.MsgCreateBridgeRequest, found bool) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.PendingBridgeRequestsKey))

	bin := store.Get([]byte(*address))
	if bin == nil {
		return value, false
	}
	k.cdc.MustUnmarshal(bin, &value)
	return value, true
}

func (k Keeper) AppendBridgeRequest(ctx sdk.Context, request *types.MsgCreateBridgeRequest) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.PendingBridgeRequestsKey))

	store.Set([]byte(request.Creator), k.cdc.MustMarshal(request))
}

func (k Keeper) RemoveBridgeRequest(ctx sdk.Context, address *string) {
	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.PendingBridgeRequestsKey))

	store.Delete([]byte(*address))
}
