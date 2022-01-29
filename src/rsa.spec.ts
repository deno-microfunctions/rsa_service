
import { assertEquals, fail } from "https://deno.land/std@0.123.0/testing/asserts.ts"
import { RSAService } from "./rsa.ts"

Deno.test("should return a valid RSA Key Pair ", async () => {

    const rsaService = new RSAService()
    const newRSAKeyPair = rsaService.generateKeyPair()

    if (newRSAKeyPair === undefined) {
        fail(`I would have expected an RSA Key Pair`)
    }

    // to be made more concrete
})


Deno.test("should...", async () => {

})


Deno.test("should...", async () => {

})

Deno.test("should...", async () => {

})

Deno.test("should...", async () => {

})