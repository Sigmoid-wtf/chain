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

func (k msgServer) ApproveUnstakeRequest(goCtx context.Context, msg *types.MsgApproveUnstakeRequest) (*types.MsgApproveUnstakeRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	value, found := k.GetUnstakeRequest(ctx, &msg.Creator)
	if !found {
		return nil, sdkerrors.ErrInvalidAddress
	}

	storeAdapter := runtime.KVStoreAdapter(k.storeService.OpenKVStore(ctx))
	store := prefix.NewStore(storeAdapter, types.KeyPrefix(types.RaoStakedBalance))

	var stakedBalance uint64 = 0
	if store.Has([]byte("key")) {
		var err error
		stakedBalance, err = strconv.ParseUint(string(store.Get([]byte("key"))), 10, 64)
		if err != nil {
			return &types.MsgApproveUnstakeRequestResponse{}, err
		}
	}
	store.Set([]byte("key"), []byte(strconv.FormatUint(stakedBalance-value.Amount, 10)))

	address := sdk.MustAccAddressFromBech32(msg.Creator)
	coin := sdk.NewCoin("sigTAO", math.NewIntFromUint64(value.Amount))
	coins := sdk.NewCoins(coin)
	k.Keeper.bankKeeper.SendCoinsFromAccountToModule(ctx, address, "gov", coins)
	k.Keeper.bankKeeper.BurnCoins(ctx, "gov", coins)

	k.RemoveUnstakeRequest(ctx, &msg.Creator)

	return &types.MsgApproveUnstakeRequestResponse{}, nil
}
