import { NegociacaoController } from "./controllers/negociacao-controller.js";

const negociacaoController = new NegociacaoController();
const formNegociacao = document.querySelector('#formNegociacao');

formNegociacao.addEventListener('submit', event => {
    event.preventDefault();
    negociacaoController.adicionar();
});
