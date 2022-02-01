import * as a from "https://deno.land/std@0.123.0/testing/asserts.ts"
import { RSAService } from "./rsa.ts"

Deno.test("runs the keyGeneration and the encryption/decryption", () => {

    const rsaService = new RSAService()
    const newRSAKeyPair = rsaService.generateKeyPair()

    a.assertExists(newRSAKeyPair, "I would have expected an RSA Key Pair")

    const message = "Hallo"
    const signature = rsaService.sign(message, newRSAKeyPair.privateKey)
    const encryptedMessage = rsaService.encrypt(message, newRSAKeyPair.publicKey)
    const decrypedmessage = rsaService.decrypt(encryptedMessage, newRSAKeyPair.privateKey)

    a.assertEquals(rsaService.validateAuthenticity(message, signature, newRSAKeyPair.publicKey), true)
    a.assertEquals(message, decrypedmessage, "decrypted message differs from original message")

})

Deno.test("should...", async () => {

})

Deno.test("should...", async () => {

})
