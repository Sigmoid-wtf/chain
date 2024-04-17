package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgApproveUnstakeRequest{}

func NewMsgApproveUnstakeRequest(creator string, unstakeAddress string, transactionId string) *MsgApproveUnstakeRequest {
	return &MsgApproveUnstakeRequest{
		Creator:        creator,
		UnstakeAddress: unstakeAddress,
		TransactionId:  transactionId,
	}
}

func (msg *MsgApproveUnstakeRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
