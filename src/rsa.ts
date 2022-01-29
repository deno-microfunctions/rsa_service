
export interface KeyPair {
    privateKey: string
    publicKey: string
}

export class RSAService {

    public generateKeyPair(): KeyPair {
        return {
            privateKey: "",
            publicKey: ""
        }
    }

    public hashContent(): string {
        return "tbd"
    }

    public sign(): any {

    }

    public encrypt(): any {

    }

    public decrypt(): any {

    }

    public validateAuthenticity(): any {

    }


}