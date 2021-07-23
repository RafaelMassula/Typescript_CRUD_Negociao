import { IView } from "../interfaces/IView.js";

export class View<T> implements IView<T>{

    protected elemento: HTMLElement;
    constructor(seletor: string){
        this.elemento = document.querySelector(seletor);
    }
    Template(model: T): string {
        throw new Error("Method not implemented.");
    }
    Update(model: T): void{
        this.elemento.innerHTML = this.Template(model);
    }

}