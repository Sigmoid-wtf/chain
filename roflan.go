package dora

import (
	"fmt"
	"time"
)

func main() {
	// address := "5Fnb1eTSrEzBjDfFyGHSWUMj98XNwtHHmMkSaWHSM7q6ZSsm"
	cosmos := "cosmos1a0u3vqq6ecm38vtgytqwjy8vaegyz9qgzmju6k"
	//   signatureHex := "0xee6e9d92aead8a44877c07ab87238711b6a2363482b847b9a627be2f4f39bd49a8061761bc668224fd5441bc9abeeb28967a758c99c7eb4cd8add0676f81a58b"
	// tsnow := time.Now().Unix()
	// ts := 1715957359

	roflan := fmt.Sprintf("%d//%d//%s", time.Now().Unix(), 2020, cosmos)
	fmt.Println(roflan)

	//   _, pubkey, err := subkey.SS58Decode(address)
	//   if err != nil {
	//     panic("ASDASD")
	//   }
	//   fmt.Println(pubkey)
	//   fmt.Println(len(pubkey))

	//   hexKey := hex.EncodeToString(pubkey)
	//   key, err := schnorrkel.NewPublicKeyFromHex("0x" + hexKey)
	//   if err != nil {
	//     panic("ASDASD")
	//   }
	//   fmt.Println(err, *key)
	//   roflan := key.Encode()
	//   fmt.Println(hex.EncodeToString(roflan[:]))

	// signature, err := schnorrkel.NewSignatureFromHex(signatureHex)
	//
	//	if err != nil {
	//	  panic("ASDASD")
	//	}
	//
	// fmt.Println(signature)
	// transcript := schnorrkel.NewSigningContext([]byte("substrate"), []byte("500"))
	// ok, err := key.Verify(signature, transcript)
	//
	//	if err != nil {
	//	  panic("ASDASD")
	//	}
	//
	// fmt.Println(ok)
}
