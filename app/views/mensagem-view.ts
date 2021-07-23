import { Mensagem } from "../models/mesagem.js";
import { View } from "./view.js";

export class MensagemView extends View<Mensagem>{

    Template(model: Mensagem): string {
        return `
          <p class="alert alert-info">${model.texto}</p>  
        `;
    }
}