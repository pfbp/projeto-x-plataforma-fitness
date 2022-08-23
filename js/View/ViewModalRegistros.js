const $ = document.querySelector.bind(document);

const modalNovaMedida = $("#modalNovaMedida");
const modalNovoLaboratorio = $("#modalNovoLaboratorio");
const modalNovaComposicao = $("#modalNovaComposicao");
const modalNovaImagem = $("#modalNovaImagem");
const modalNovoProtocolo = $("#modalNovoProtocolo");

function abreModalMedida() {
  modalNovaMedida.classList.add("registros__modal--ativo");
  atualizaListaRemover();
  desabilitaRemover();
}
function fechaModalMedida(event) {
  event.preventDefault();
  removeElementosExtras();
  modalNovaMedida.classList.remove("registros__modal--ativo");
  let form = document.querySelector(".registrosModal__form");
  form.reset();
}

function abreModalLaboratorio() {
  modalNovoLaboratorio.classList.add("registros__modal--ativo");
}
function fechaModalLaboratorio(event) {
  event.preventDefault();
  modalNovoLaboratorio.classList.remove("registros__modal--ativo");
}

function abreModalComposicao() {
  modalNovaComposicao.classList.add("registros__modal--ativo");
}
function fechaModalComposicao(event) {
  event.preventDefault();
  modalNovaComposicao.classList.remove("registros__modal--ativo");
}

function abreModalImagem() {
  modalNovaImagem.classList.add("registros__modal--ativo");
}
function fechaModalImagem(event) {
  event.preventDefault();
  modalNovaImagem.classList.remove("registros__modal--ativo");
}

function abreModalProtocolo() {
  modalNovoProtocolo.classList.add("registros__modal--ativo");
}
function fechaModalProtocolo(event) {
  event.preventDefault();
  modalNovoProtocolo.classList.remove("registros__modal--ativo");
}
