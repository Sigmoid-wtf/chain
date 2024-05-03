package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SetRaoCurrentStakedBalance(goCtx context.Context, msg *types.MsgSetRaoCurrentStakedBalance) (*types.MsgSetRaoCurrentStakedBalanceResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.LastProcessedKey))

	store.Set([]byte("key"), []byte(msg.RaoCurrentStakedBalance))
	return &types.MsgSetRaoCurrentStakedBalanceResponse{}, nil
}
