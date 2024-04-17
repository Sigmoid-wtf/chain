package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateUnstakeRequest{}

func NewMsgCreateUnstakeRequest(creator string, unstakeAddress string, amount uint64) *MsgCreateUnstakeRequest {
	return &MsgCreateUnstakeRequest{
		Creator:        creator,
		UnstakeAddress: unstakeAddress,
		Amount:         amount,
	}
}

func (msg *MsgCreateUnstakeRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
