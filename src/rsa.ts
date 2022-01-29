import * as B from 'https://deno.land/x/bigint/mod.ts'

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

    public hashContent(): string {
        return "tbd"
    }

    public sign(): any {

    }

    public encrypt(m:bigint, privateKey:key): any {
        return B.modPow(m, privateKey.cryptionComponent, privateKey.N)
    }

    public decrypt(c:bigint, publicKey:key): any {
        return B.modPow(c, publicKey.cryptionComponent, publicKey.N)
    }

    public validateAuthenticity(): any {

    }


}