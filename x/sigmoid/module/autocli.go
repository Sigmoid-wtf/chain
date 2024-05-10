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
					RpcMethod:      "GetRaoStakedBalance",
					Use:            "get-rao-staked-balance",
					Short:          "Query get-rao-staked-balance",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{},
				},

				{
					RpcMethod:      "GetSigtaoRateD",
					Use:            "get-sigtao-rate-d",
					Short:          "Query get-sigtao-rate-d",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{},
				},

				{
					RpcMethod:      "GetPendingBridgeRequest",
					Use:            "get-pending-bridge-request",
					Short:          "Query get-pending-bridge-request",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{},
				},

				{
					RpcMethod:      "GetLatestProcessedEthBlock",
					Use:            "get-latest-processed-eth-block",
					Short:          "Query get-latest-processed-eth-block",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{},
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
				{
					RpcMethod:      "SetRaoCurrentStakedBalance",
					Use:            "set-rao-current-staked-balance [rao-current-staked-balance]",
					Short:          "Send a set-rao-current-staked-balance tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "raoCurrentStakedBalance"}},
				},
				{
					RpcMethod:      "CreateBridgeRequest",
					Use:            "create-bridge-request [erc-20-address] [amount]",
					Short:          "Send a create-bridge-request tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "erc20Address"}, {ProtoField: "amount"}},
				},
				{
					RpcMethod:      "ApproveBridgeRequest",
					Use:            "approve-bridge-request [address]",
					Short:          "Send a approve-bridge-request tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "address"}},
				},
				{
					RpcMethod:      "IncomeBridgeRequest",
					Use:            "income-bridge-request [address] [amount]",
					Short:          "Send a income-bridge-request tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "address"}, {ProtoField: "amount"}},
				},
				{
					RpcMethod:      "CreateRequestSigned",
					Use:            "create-request-signed [sender-address] [signature] [amount] [timestamp]",
					Short:          "Send a create-request-signed tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "senderAddress"}, {ProtoField: "signature"}, {ProtoField: "amount"}, {ProtoField: "timestamp"}},
				},
				{
					RpcMethod:      "SetLatestProcessedEthBlock",
					Use:            "set-latest-processed-eth-block [block-number]",
					Short:          "Send a set-latest-processed-eth-block tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "blockNumber"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
