package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "sigmoid/testutil/keeper"
	"sigmoid/x/sigmoid/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.SigmoidKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
