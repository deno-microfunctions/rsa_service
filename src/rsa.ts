import * as B from 'https://deno.land/x/bigint/mod.ts'
import hashJs from 'https://deno.land/x/hash/mod-hashjs.ts'
import { Buffer } from "https://deno.land/std@0.123.0/io/mod.ts";

export interface key {
    N: bigint
    cryptionComponent: bigint
}
export interface KeyPair {
    privateKey: key
    publicKey: key
}

export class RSAService {

    public generateKeyPair(keySize = 100) : KeyPair{
        // two distinct prime numbers are chosen as random
        let p = B.randomPrime(keySize)!, q=B.randomPrime(keySize)!

        let N = p*q, r=(p-1n)*(q-1n)
        let e = B.randomPrime(keySize)! // e<r
        let d = B.modInv(e, r)! // ed=1 mod r

        return {publicKey : {N : N,cryptionComponent : d},
                privateKey: {N : N,cryptionComponent : e}}
    }

    public hashContent(m:String): string {
        let hash = hashJs.sha256().update(m).digest('hex')
        return hash.toString()
    }

    public sign(m:string, privateKey:key): any {
        let hash = this.hashContent(m)
        let hashDez = parseInt(hash, 16)

        const signature = B.modPow(BigInt(hashDez), privateKey.cryptionComponent, privateKey.N)

        return signature
    }

    public encrypt(m:string, privateKey:key): BigInt[] {
        let charlist: BigInt[] = [];

        for (let char of m) {
            let message = new TextEncoder().encode(char)
            charlist.push(B.modPow(BigInt(message[0]), privateKey.cryptionComponent, privateKey.N))
        }
        return charlist
    }

    public decrypt(c:any, publicKey:key): any {
        let result: String = ""
        for (let letter of c) {
            let de: BigInt = B.modPow(letter, publicKey.cryptionComponent, publicKey.N)
            result +=  new TextDecoder().decode(Uint8Array.of(Number(de)))
        }

        return result
    }

    public validateAuthenticity(m:string, sign:bigint, publicKey:key): any {

        let hash = this.hashContent(m)
        let hashFromSignature = B.modPow(sign, publicKey.cryptionComponent, publicKey.N)
        let hashDez = parseInt(hash, 16)
        console.log("Signature valid:", hashDez == Number(hashFromSignature))

    }

}

