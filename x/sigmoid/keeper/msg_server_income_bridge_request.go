package keeper

import (
	"context"

	"sigmoid/x/sigmoid/types"

	"cosmossdk.io/math"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) IncomeBridgeRequest(goCtx context.Context, msg *types.MsgIncomeBridgeRequest) (*types.MsgIncomeBridgeRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	from := sdk.MustAccAddressFromBech32(types.BridgeTreasuryAddress)
	to := sdk.MustAccAddressFromBech32(msg.Address)

	coins := sdk.NewCoins(sdk.NewCoin("sigRAO", math.NewIntFromUint64(msg.Amount)))

	err := k.Keeper.bankKeeper.SendCoins(ctx, from, to, coins)
	if err != nil {
		return nil, sdkerrors.ErrInvalidCoins
	}

	return &types.MsgIncomeBridgeRequestResponse{}, nil
}
