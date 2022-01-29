
import { assertEquals, fail } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import { RSAService } from "./rsa.ts"

Deno.test("should return a valid RSA Key Pair ", async () => {

    const rsaService = new RSAService()
    const newRSAKeyPair = rsaService.generateKeyPair()

    if (newRSAKeyPair === undefined) {
        fail(`I would have expected an RSA Key Pair`)
    }

    console.log(newRSAKeyPair);

    // to be made more concrete
})


Deno.test("should return the encrpyted message", async () => {

    const rsaService = new RSAService()
    const newRSAKeyPair = rsaService.generateKeyPair()

    if (newRSAKeyPair === undefined) {
        fail(`I would have expected an RSA Key Pair`)
    }

    const encryptedMessage = rsaService.encrypt(BigInt("9007199254740991"),newRSAKeyPair.privateKey)

    if (newRSAKeyPair === undefined) {
        fail(`I would have expected an encrypted message`)
    }

    console.log(encryptedMessage);
    
})


Deno.test("should return the decrypted message", async () => {

    const rsaService = new RSAService()
    const newRSAKeyPair = rsaService.generateKeyPair()

    if (newRSAKeyPair === undefined) {
        fail(`I would have expected an RSA Key Pair`)
    }
    const message = "9007199254740991"
    const encryptedMessage = rsaService.encrypt(BigInt(message), newRSAKeyPair.privateKey)
    const decrypedmessage = rsaService.decrypt(encryptedMessage, newRSAKeyPair.publicKey)

    console.log(message)
    console.log(decrypedmessage)
})

Deno.test("should...", async () => {

})

Deno.test("should...", async () => {

})