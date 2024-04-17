package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgApproveRequest{}

func NewMsgApproveRequest(creator string, senderAddress string, transactionId string) *MsgApproveRequest {
	return &MsgApproveRequest{
		Creator:       creator,
		SenderAddress: senderAddress,
		TransactionId: transactionId,
	}
}

func (msg *MsgApproveRequest) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
