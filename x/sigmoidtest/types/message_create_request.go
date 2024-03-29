package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateRequest{}

func NewMsgCreateRequest(creator string, senderAddress string, amount uint64) *MsgCreateRequest {
	return &MsgCreateRequest{
		Creator:       creator,
		SenderAddress: senderAddress,
		Amount:        amount,
	}
}

func (msg *MsgCreateRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
