package types

const (
	// ModuleName defines the module name
	ModuleName = "sigmoid"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_sigmoid"
)

var (
	LastProcessedKey        = "last_processed/"
	ParamsKey               = []byte("p_sigmoid")
	PendingRequestsKey      = "requests/"
	RaoCurrentStakedBalance = "rao_current_staked_balance/"
	RaoStakedBalance        = "rao_staked_balance/"
	SigRaoCount             = "sigrao_count/"
	UnstakeRequestsKey      = "unstake/"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
