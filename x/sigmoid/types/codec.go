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
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgApproveUnstakeRequest{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgSetRaoCurrentStakedBalance{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateBridgeRequest{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgApproveBridgeRequest{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgIncomeBridgeRequest{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateRequestSigned{},
	)
	// this line is used by starport scaffolding # 3

	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateParams{},
	)
	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}
