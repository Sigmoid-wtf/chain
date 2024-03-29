package sigmoidtest

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "sigmoid-test/api/sigmoidtest/sigmoidtest"
)

// AutoCLIOptions implements the autocli.HasAutoCLIConfig interface.
func (am AppModule) AutoCLIOptions() *autocliv1.ModuleOptions {
	return &autocliv1.ModuleOptions{
		Query: &autocliv1.ServiceCommandDescriptor{
			Service: modulev1.Query_ServiceDesc.ServiceName,
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "Params",
					Use:       "params",
					Short:     "Shows the parameters of the module",
				},
				{
					RpcMethod:      "GetAmount",
					Use:            "get-amount [sender-address]",
					Short:          "Query get-amount",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "senderAddress"}},
				},

				// this line is used by ignite scaffolding # autocli/query
			},
		},
		Tx: &autocliv1.ServiceCommandDescriptor{
			Service:              modulev1.Msg_ServiceDesc.ServiceName,
			EnhanceCustomCommand: true, // only required if you want to use the custom command
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "UpdateParams",
					Skip:      true, // skipped because authority gated
				},
				{
					RpcMethod:      "CreateRequest",
					Use:            "create-request [sender-address] [amount]",
					Short:          "Send a create-request tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "senderAddress"}, {ProtoField: "amount"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
