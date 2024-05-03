package keeper

import (
	"context"
	"strconv"

	"sigmoid/x/sigmoid/types"

	"cosmossdk.io/math"
	"cosmossdk.io/store/prefix"
	"github.com/cosmos/cosmos-sdk/runtime"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) ApproveRequest(goCtx context.Context, msg *types.MsgApproveRequest) (*types.MsgApproveRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	request, found := k.Keeper.GetRequest(ctx, &msg.SenderAddress)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.RaoStakedBalance))

	var stakedBalance uint64 = 0
	if store.Has([]byte("key")) {
		var err error
		stakedBalance, err = strconv.ParseUint(string(store.Get([]byte("key"))), 10, 64)
		if err != nil {
			return &types.MsgApproveRequestResponse{}, err
		}
	}
	store.Set([]byte("key"), []byte(strconv.FormatUint(stakedBalance+request.Amount, 10)))

	coin := sdk.NewCoin("sigTAO", math.NewIntFromUint64(request.Amount))
	coins := sdk.NewCoins(coin)
	err := k.Keeper.bankKeeper.MintCoins(ctx, "mint", coins)
	if err != nil {
		return nil, sdkerrors.ErrInvalidCoins
	}
	address := sdk.MustAccAddressFromBech32(request.MintAddress)
	err = k.Keeper.bankKeeper.SendCoinsFromModuleToAccount(ctx, "mint", address, coins)
	if err != nil {
		return nil, sdkerrors.ErrInvalidCoins
	}

	k.Keeper.SetLastProcessedTransaction(ctx, msg.TransactionId)
	k.Keeper.RemoveRequest(ctx, &msg.SenderAddress)

	return &types.MsgApproveRequestResponse{}, nil
}
