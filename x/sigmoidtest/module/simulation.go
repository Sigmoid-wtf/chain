package sigmoidtest

import (
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"sigmoid-test/testutil/sample"
	sigmoidtestsimulation "sigmoid-test/x/sigmoidtest/simulation"
	"sigmoid-test/x/sigmoidtest/types"
)

// avoid unused import issue
var (
	_ = sigmoidtestsimulation.FindAccount
	_ = rand.Rand{}
	_ = sample.AccAddress
	_ = sdk.AccAddress{}
	_ = simulation.MsgEntryKind
)

const (
	opWeightMsgCreateRequest = "op_weight_msg_create_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateRequest int = 100

	opWeightMsgApproveRequest = "op_weight_msg_approve_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgApproveRequest int = 100

	opWeightMsgProcessTransaction = "op_weight_msg_process_transaction"
	// TODO: Determine the simulation weight value
	defaultWeightMsgProcessTransaction int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	sigmoidtestGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&sigmoidtestGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ simtypes.StoreDecoderRegistry) {}

// ProposalContents doesn't return any content functions for governance proposals.
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateRequest int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateRequest, &weightMsgCreateRequest, nil,
		func(_ *rand.Rand) {
			weightMsgCreateRequest = defaultWeightMsgCreateRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateRequest,
		sigmoidtestsimulation.SimulateMsgCreateRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgApproveRequest int
	simState.AppParams.GetOrGenerate(opWeightMsgApproveRequest, &weightMsgApproveRequest, nil,
		func(_ *rand.Rand) {
			weightMsgApproveRequest = defaultWeightMsgApproveRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgApproveRequest,
		sigmoidtestsimulation.SimulateMsgApproveRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgProcessTransaction int
	simState.AppParams.GetOrGenerate(opWeightMsgProcessTransaction, &weightMsgProcessTransaction, nil,
		func(_ *rand.Rand) {
			weightMsgProcessTransaction = defaultWeightMsgProcessTransaction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgProcessTransaction,
		sigmoidtestsimulation.SimulateMsgProcessTransaction(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateRequest,
			defaultWeightMsgCreateRequest,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				sigmoidtestsimulation.SimulateMsgCreateRequest(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgApproveRequest,
			defaultWeightMsgApproveRequest,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				sigmoidtestsimulation.SimulateMsgApproveRequest(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgProcessTransaction,
			defaultWeightMsgProcessTransaction,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				sigmoidtestsimulation.SimulateMsgProcessTransaction(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
