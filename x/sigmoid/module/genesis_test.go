package sigmoid_test

import (
	"testing"

	keepertest "sigmoid/testutil/keeper"
	"sigmoid/testutil/nullify"
	sigmoid "sigmoid/x/sigmoid/module"
	"sigmoid/x/sigmoid/types"

	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.SigmoidKeeper(t)
	sigmoid.InitGenesis(ctx, k, genesisState)
	got := sigmoid.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
