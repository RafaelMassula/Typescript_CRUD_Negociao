import { Mensagem } from "../models/mesagem.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes;
        this.mensagem = new Mensagem("Negociação adcionada com sucesso.");
        this.mensagemView = new MensagemView("#mensagemView");
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        const $ = document.querySelector.bind(document);
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
        this.negociacoesView.Update(this.negociacoes);
    }
    adicionar() {
        const negociacao = this.criarNegociacao();
        this.negociacoes.adicionar(negociacao);
        this.negociacoes.listar();
        this.negociacoesView.Update(this.negociacoes);
        this.mensagemView.Update(this.mensagem);
        this.limparFormulario();
    }
    criarNegociacao() {
        const regx = /-/g;
        const negociacaoModel = new Negociacao(new Date(this.inputData.value.replace(regx, ",")), Number.parseInt(this.inputQuantidade.value), Number.parseFloat(this.inputValor.value));
        return negociacaoModel;
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}
