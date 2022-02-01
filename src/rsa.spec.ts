
import { assertEquals, fail } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import { RSAService } from "./rsa.ts"

Deno.test("runs the keyGeneration and the encryption/decryption", async () => {

    const rsaService = new RSAService()
    const newRSAKeyPair = rsaService.generateKeyPair()

    if (newRSAKeyPair === undefined) {
        fail(`I would have expected an RSA Key Pair`)
    }

    const message = "Hallo"

    const signature = rsaService.sign(message, newRSAKeyPair.privateKey)

    const encryptedMessage = rsaService.encrypt(message, newRSAKeyPair.publicKey)

    if (newRSAKeyPair === undefined) {
        fail(`I would have expected an encrypted message`)
    }

    const decrypedmessage = rsaService.decrypt(encryptedMessage, newRSAKeyPair.privateKey)

    rsaService.validateAuthenticity(message, signature, newRSAKeyPair.publicKey)
    
    if(message != decrypedmessage)
    {
        fail('decrypted message differs from original message')
    }

})

Deno.test("should...", async () => {

})

Deno.test("should...", async () => {

})
