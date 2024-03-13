package sigmoidtest_test

import (
	"testing"

	keepertest "sigmoid-test/testutil/keeper"
	"sigmoid-test/testutil/nullify"
	sigmoidtest "sigmoid-test/x/sigmoidtest/module"
	"sigmoid-test/x/sigmoidtest/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.SigmoidtestKeeper(t)
	sigmoidtest.InitGenesis(ctx, k, genesisState)
	got := sigmoidtest.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
