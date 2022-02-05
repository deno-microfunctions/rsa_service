# RSA

## Usage Example

```ts
import { RSAService } from "https://raw.githubusercontent.com/deno-microfunctions/rsa/main/src/rsa.ts"

const rsaService = new RSAService()
const newRSAKeyPair = rsaService.generateKeyPair()

const message = "Hello World!" // Message to encrypt

// Generate signature
const signature = rsaService.createSignature(message, newRSAKeyPair.privateKey) // encrypted sha256 hash of signature

// Encrypt
const encryptedMessage = rsaService.encrypt(message, newRSAKeyPair.publicKey) // returns encrypted message
// Decrypt
const decryptedmessage = rsaService.decrypt(encryptedMessage, newRSAKeyPair.privateKey) // returns decrypted message

// Validate with signature
const isAuthentic = rsaService.validateAuthenticity(message, signature, publicKey)
```

## Execute Unit tests
```sh
deno test src/rsa.spec.ts
```
