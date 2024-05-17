package keeper

import (
	"context"
	"encoding/hex"
	"fmt"
	"time"

	"sigmoid/x/sigmoid/types"

	schnorrkel "github.com/ChainSafe/go-schnorrkel"
	"github.com/vedhavyas/go-subkey"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

func (k msgServer) CreateRequestSigned(goCtx context.Context, msg *types.MsgCreateRequestSigned) (*types.MsgCreateRequestSignedResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	tsNow := time.Now()
	tsMessage := time.Unix(int64(msg.Timestamp), 0)
	if tsMessage.After(tsNow) {
		return nil, sdkerrors.ErrInvalidRequest
	}

	if tsNow.Sub(tsMessage) > time.Minute*15 {
		return nil, sdkerrors.ErrInvalidRequest
	}

	_, pubkey, err := subkey.SS58Decode(msg.SenderAddress)
	if err != nil {
		return nil, sdkerrors.ErrInvalidAddress
	}

	hexKey := hex.EncodeToString(pubkey)
	key, err := schnorrkel.NewPublicKeyFromHex("0x" + hexKey)
	if err != nil {
		return nil, fmt.Errorf("invalid bittensor address")
	}

	signature, err := schnorrkel.NewSignatureFromHex(msg.Signature)
	if err != nil {
		return nil, fmt.Errorf("signature is incorrect")
	}

	textToSign := fmt.Sprintf("%d//%d//%s", msg.Timestamp, msg.Amount, msg.Creator)
	k.logger.Error(textToSign)
	transcript := schnorrkel.NewSigningContext([]byte("substrate"), []byte(textToSign))
	ok, err := key.Verify(signature, transcript)
	if err != nil {
		return nil, fmt.Errorf("signature is incorrect")
	}

	if !ok {
		return nil, fmt.Errorf("signature is incorrect")
	}

	request := &types.Request{
		SenderAddress: msg.SenderAddress,
		MintAddress:   msg.Creator,
		Amount:        msg.Amount,
		Status:        0,
		Timestamp:     msg.Timestamp,
	}

	oldRequest, found := k.Keeper.GetRequest(ctx, &msg.SenderAddress)
	if found {
		oldRequestTs := time.Unix(int64(oldRequest.Timestamp), 0)
		if tsNow.Sub(oldRequestTs) < time.Minute*15 {
			return nil, sdkerrors.ErrConflict
		}
	}

	k.Keeper.AppendRequest(ctx, request)
	return &types.MsgCreateRequestSignedResponse{}, nil
}
