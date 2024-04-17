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
	ParamsKey          = []byte("p_sigmoid")
	PendingRequestsKey = "requests/"
	LastProcessedKey   = "last_processed/"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
