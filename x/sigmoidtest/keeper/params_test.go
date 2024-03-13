package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "sigmoid-test/testutil/keeper"
	"sigmoid-test/x/sigmoidtest/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.SigmoidtestKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
