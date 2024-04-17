package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgProcessTransaction{}

func NewMsgProcessTransaction(creator string, transactionId string) *MsgProcessTransaction {
	return &MsgProcessTransaction{
		Creator:       creator,
		TransactionId: transactionId,
	}
}

func (msg *MsgProcessTransaction) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
