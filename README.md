# RSA

## Usage Example

```ts
import { RSAService } from "https://raw.githubusercontent.com/deno-microfunctions/rsa/main/src/rsa.ts"

const rsaService = new RSAService()
const newRSAKeyPair = rsaService.generateKeyPair()

const message = "Hello World!" // Message to be encrypted

// Generate signature
const signature = rsaService.sign(message, newRSAKeyPair.privateKey) // encrypted sha256 hash of signature

// Encrypt
const encryptedMessage = rsaService.encrypt(message, newRSAKeyPair.publicKey) // returns with public key encrypted message
// Decrypt
const decryptedmessage = rsaService.decrypt(encryptedMessage, newRSAKeyPair.privateKey) // returns with private key decrypted message
```

## Execute Unit tests
```sh
deno test src/rsa.spec.ts
```
