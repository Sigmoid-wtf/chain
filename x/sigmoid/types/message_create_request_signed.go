package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateRequestSigned{}

func NewMsgCreateRequestSigned(creator string, senderAddress string, signature string, amount uint64, timestamp uint64) *MsgCreateRequestSigned {
	return &MsgCreateRequestSigned{
		Creator:       creator,
		SenderAddress: senderAddress,
		Signature:     signature,
		Amount:        amount,
		Timestamp:     timestamp,
	}
}

func (msg *MsgCreateRequestSigned) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
