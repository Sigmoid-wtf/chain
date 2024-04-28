package sigmoid

import (
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"sigmoid/testutil/sample"
	sigmoidsimulation "sigmoid/x/sigmoid/simulation"
	"sigmoid/x/sigmoid/types"
)

// avoid unused import issue
var (
	_ = sigmoidsimulation.FindAccount
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

	opWeightMsgCreateUnstakeRequest = "op_weight_msg_create_unstake_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateUnstakeRequest int = 100

	opWeightMsgApproveUnstakeRequest = "op_weight_msg_approve_unstake_request"
	// TODO: Determine the simulation weight value
	defaultWeightMsgApproveUnstakeRequest int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	sigmoidGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&sigmoidGenesis)
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
		sigmoidsimulation.SimulateMsgCreateRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgApproveRequest int
	simState.AppParams.GetOrGenerate(opWeightMsgApproveRequest, &weightMsgApproveRequest, nil,
		func(_ *rand.Rand) {
			weightMsgApproveRequest = defaultWeightMsgApproveRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgApproveRequest,
		sigmoidsimulation.SimulateMsgApproveRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgProcessTransaction int
	simState.AppParams.GetOrGenerate(opWeightMsgProcessTransaction, &weightMsgProcessTransaction, nil,
		func(_ *rand.Rand) {
			weightMsgProcessTransaction = defaultWeightMsgProcessTransaction
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgProcessTransaction,
		sigmoidsimulation.SimulateMsgProcessTransaction(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateUnstakeRequest int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateUnstakeRequest, &weightMsgCreateUnstakeRequest, nil,
		func(_ *rand.Rand) {
			weightMsgCreateUnstakeRequest = defaultWeightMsgCreateUnstakeRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateUnstakeRequest,
		sigmoidsimulation.SimulateMsgCreateUnstakeRequest(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgApproveUnstakeRequest int
	simState.AppParams.GetOrGenerate(opWeightMsgApproveUnstakeRequest, &weightMsgApproveUnstakeRequest, nil,
		func(_ *rand.Rand) {
			weightMsgApproveUnstakeRequest = defaultWeightMsgApproveUnstakeRequest
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgApproveUnstakeRequest,
		sigmoidsimulation.SimulateMsgApproveUnstakeRequest(am.accountKeeper, am.bankKeeper, am.keeper),
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
				sigmoidsimulation.SimulateMsgCreateRequest(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgApproveRequest,
			defaultWeightMsgApproveRequest,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				sigmoidsimulation.SimulateMsgApproveRequest(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgProcessTransaction,
			defaultWeightMsgProcessTransaction,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				sigmoidsimulation.SimulateMsgProcessTransaction(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateUnstakeRequest,
			defaultWeightMsgCreateUnstakeRequest,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				sigmoidsimulation.SimulateMsgCreateUnstakeRequest(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgApproveUnstakeRequest,
			defaultWeightMsgApproveUnstakeRequest,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				sigmoidsimulation.SimulateMsgApproveUnstakeRequest(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}