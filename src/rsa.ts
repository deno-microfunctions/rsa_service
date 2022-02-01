import * as B from 'https://deno.land/x/bigint/mod.ts'
import hashJs from 'https://deno.land/x/hash/mod-hashjs.ts'
import { Buffer } from "https://deno.land/std@0.123.0/io/mod.ts";

export interface privateKey {
    N: bigint
    D: bigint
}
export interface publicKey {
    N: bigint
    E: bigint
}

export interface KeyPair {
    privateKey: privateKey
    publicKey: publicKey
}

export class RSAService {

    public generateKeyPair(keySize = 100) : KeyPair{
        // two distinct prime numbers are chosen as random
        let p = B.randomPrime(keySize)!, q=B.randomPrime(keySize)!

        let n = p*q, r=(p-1n)*(q-1n)
        let e = B.randomPrime(keySize)! // e<r
        let d = B.modInv(e, r)! // ed=1 mod r

        return {publicKey : {N : n, E : e},
                privateKey: {N : n, D : d}}
    }

    public hashContent(m:String): string {
        let hash = hashJs.sha256().update(m).digest('hex')
        return hash.toString()
    }

    public sign(m:string, key:privateKey): any {
        let hash = this.hashContent(m)
        let hashDez = parseInt(hash, 16)

        const signature = B.modPow(BigInt(hashDez), key.D, key.N)

        return signature
    }

    public encrypt(m:string, key:publicKey): BigInt[] {
        let charlist: BigInt[] = [];

        for (let char of m) {
            let message = new TextEncoder().encode(char)
            charlist.push(B.modPow(BigInt(message[0]), key.E, key.N))
        }
        return charlist
    }

    public decrypt(c:any, key:privateKey): any {
        let result: String = ""

        for (let letter of c) {
            let de: BigInt = B.modPow(letter, key.D, key.N)
            result +=  new TextDecoder().decode(Uint8Array.of(Number(de)))
        }

        return result
    }

    public validateAuthenticity(m:string, sign:bigint, key:publicKey): any {

        let hash = this.hashContent(m)
        let hashFromSignature = B.modPow(sign, key.E, key.N)
        let hashDez = parseInt(hash, 16)
        console.log("Signature valid:", hashDez == Number(hashFromSignature))

    }

}

