package sigmoid

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "sigmoid/api/sigmoid/sigmoid"
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

				{
					RpcMethod:      "GetLastProcessed",
					Use:            "get-last-processed",
					Short:          "Query get-last-processed",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{},
				},

				{
					RpcMethod:      "GetPendingUnstakeRequest",
					Use:            "get-pending-unstake-request",
					Short:          "Query get-pending-unstake-request",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{},
				},

				{
					RpcMethod:      "GetFrontPendingStakeRequest",
					Use:            "get-front-pending-stake-request [address]",
					Short:          "Query get-front-pending-stake-request",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "address"}},
				},

				{
					RpcMethod:      "GetFrontPendingUnstakeRequest",
					Use:            "get-front-pending-unstake-request [address]",
					Short:          "Query get-front-pending-unstake-request",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "address"}},
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
				{
					RpcMethod:      "ApproveRequest",
					Use:            "approve-request [sender-address] [transaction-id]",
					Short:          "Send a approve-request tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "senderAddress"}, {ProtoField: "transactionId"}},
				},
				{
					RpcMethod:      "ProcessTransaction",
					Use:            "process-transaction [transaction-id]",
					Short:          "Send a process-transaction tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "transactionId"}},
				},
				{
					RpcMethod:      "CreateUnstakeRequest",
					Use:            "create-unstake-request [unstake-address] [amount]",
					Short:          "Send a create-unstake-request tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "unstakeAddress"}, {ProtoField: "amount"}},
				},
				{
					RpcMethod:      "ApproveUnstakeRequest",
					Use:            "approve-unstake-request [unstake-address] [transaction-id]",
					Short:          "Send a approve-unstake-request tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "unstakeAddress"}, {ProtoField: "transactionId"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
