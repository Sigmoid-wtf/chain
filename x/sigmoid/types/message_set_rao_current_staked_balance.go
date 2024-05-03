package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgSetRaoCurrentStakedBalance{}

func NewMsgSetRaoCurrentStakedBalance(creator string, raoCurrentStakedBalance uint64) *MsgSetRaoCurrentStakedBalance {
	return &MsgSetRaoCurrentStakedBalance{
		Creator:                 creator,
		RaoCurrentStakedBalance: raoCurrentStakedBalance,
	}
}

func (msg *MsgSetRaoCurrentStakedBalance) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
