export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    Template(model) {
        throw new Error("Method not implemented.");
    }
    Update(model) {
        this.elemento.innerHTML = this.Template(model);
    }
}
