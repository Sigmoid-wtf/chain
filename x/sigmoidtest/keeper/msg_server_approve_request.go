package keeper

import (
	"context"

	"sigmoid-test/x/sigmoidtest/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) ApproveRequest(goCtx context.Context, msg *types.MsgApproveRequest) (*types.MsgApproveRequestResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	request, found := k.Keeper.GetRequest(ctx, &msg.SenderAddress)
	if !found {
		return nil, sdkerrors.ErrKeyNotFound
	}

	_ = request.Amount
	// TODO: mint request.Amount tokens to request.MintAddress

	k.Keeper.SetLastProcessedTransaction(ctx, &msg.TransactionId)
	k.Keeper.RemoveRequest(ctx, &msg.SenderAddress)

	return &types.MsgApproveRequestResponse{}, nil
}
