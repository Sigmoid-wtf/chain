package types

const (
	// ModuleName defines the module name
	ModuleName = "sigmoidtest"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_sigmoidtest"
)

var (
	ParamsKey = []byte("p_sigmoidtest")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
