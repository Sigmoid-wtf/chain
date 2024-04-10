package types

import (
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
	// this line is used by starport scaffolding # 1
)

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateRequest{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgApproveRequest{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgProcessTransaction{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateUnstakeRequest{},
	)
	// this line is used by starport scaffolding # 3

	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateParams{},
	)
	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}
