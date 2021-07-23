export class Mensagem {
   
    public get texto(): string {
        return this._texto;
    }

    constructor(
        private readonly _texto: string
    ) { }

}