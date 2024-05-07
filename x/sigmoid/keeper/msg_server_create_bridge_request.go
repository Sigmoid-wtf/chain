package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	"cosmossdk.io/math"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateBridgeRequest(goCtx context.Context, msg *types.MsgCreateBridgeRequest) (*types.MsgCreateBridgeRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if _, found := k.GetBridgeRequest(ctx, &msg.Creator); found {
		return nil, sdkerrors.ErrConflict
	}

	from := sdk.MustAccAddressFromBech32(msg.Creator)
	to := sdk.MustAccAddressFromBech32(types.BridgeTreasuryAddress)

	coins := sdk.NewCoins(sdk.NewCoin("sigRAO", math.NewIntFromUint64(msg.Amount)))

	err := k.Keeper.bankKeeper.SendCoins(ctx, from, to, coins)
	if err != nil {
		return nil, sdkerrors.ErrInvalidCoins
	}

	k.AppendBridgeRequest(ctx, msg)

	return &types.MsgCreateBridgeRequestResponse{}, nil
}
