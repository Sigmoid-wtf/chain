package types

const (
	// ModuleName defines the module name
	ModuleName = "sigmoid"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_sigmoid"

	// Bridge treasury address
	BridgeTreasuryAddress = "cosmos1nhyahp8zvv0np5decjfrq7xec05nw532n7ls4z"
)

var (
	PendingBridgeRequestsKey = "bridge_requests/"
	LastProcessedKey         = "last_processed/"
	ParamsKey                = []byte("p_sigmoid")
	PendingRequestsKey       = "requests/"
	RaoCurrentStakedBalance  = "rao_current_staked_balance/"
	RaoStakedBalance         = "rao_staked_balance/"
	SigRaoCount              = "sigrao_count/"
	UnstakeRequestsKey       = "unstake/"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
