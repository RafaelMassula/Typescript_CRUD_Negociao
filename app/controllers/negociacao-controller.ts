import { Mensagem } from "../models/mesagem.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {

    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes;
    private mensagem = new Mensagem("Negociação adcionada com sucesso.");
    private mensagemView = new MensagemView("#mensagemView");
    private negociacoesView = new NegociacoesView('#negociacoesView');
    
    constructor() {
        const $ = document.querySelector.bind(document);
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
        this.negociacoesView.Update(this.negociacoes);
    }

    adicionar(): void {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adicionar(negociacao);
        this.negociacoes.listar();
        this.negociacoesView.Update(this.negociacoes);
        this.mensagemView.Update(this.mensagem);
        this.limparFormulario();
    }

    criarNegociacao(): Negociacao {
        const regx = /-/g;
        const negociacaoModel = new Negociacao(
            new Date(this.inputData.value.replace(regx, ",")),
            Number.parseInt(this.inputQuantidade.value),
            Number.parseFloat(this.inputValor.value)
        );
        return negociacaoModel;
    }

    limparFormulario(): void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';

        this.inputData.focus();
    }
}