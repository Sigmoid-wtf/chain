package simulation

import (
	"math/rand"

	"sigmoid/x/sigmoid/keeper"
	"sigmoid/x/sigmoid/types"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgSetRaoCurrentStakedBalance(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgSetRaoCurrentStakedBalance{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the SetRaoCurrentStakedBalance simulation

		return simtypes.NoOpMsg(types.ModuleName, sdk.MsgTypeURL(msg), "SetRaoCurrentStakedBalance simulation not implemented"), nil, nil
	}
}
