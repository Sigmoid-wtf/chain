package simulation

import (
	"math/rand"

	"sigmoid-test/x/sigmoidtest/keeper"
	"sigmoid-test/x/sigmoidtest/types"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgApproveUnstakeRequest(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgApproveUnstakeRequest{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the ApproveUnstakeRequest simulation

		return simtypes.NoOpMsg(types.ModuleName, sdk.MsgTypeURL(msg), "ApproveUnstakeRequest simulation not implemented"), nil, nil
	}
}
