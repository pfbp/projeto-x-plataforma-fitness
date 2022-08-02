//Geral do modal
let modalGeral = document.getElementsByClassName("registros__modal");
let btnClose = document.getElementsByClassName("registros__modal--close");

//Registro de Medidas
let btnMedidas = document.getElementsByClassName("registros__botao--medidas");
let modalMedidas = document.getElementsByClassName("registros__medidas");

btnMedidas[0].onclick = function () {
  modalGeral[0].classList.add("registros__modal--ativo");
  modalMedidas[0].classList.add("registros__modal--ativo");
};

btnClose[0].onclick = function () {
  modalGeral[0].classList.remove("registros__modal--ativo");
  modalMedidas[0].classList.remove("registros__modal--ativo");
};

//Registro de Laboratório
let btnLaboratorio = document.getElementsByClassName(
  "registros__botao--laboratorio"
);
let modalLaboratorio = document.getElementsByClassName(
  "registros__laboratorio"
);

btnLaboratorio[0].onclick = function () {
  modalGeral[1].classList.add("registros__modal--ativo");
  modalLaboratorio[0].classList.add("registros__modal--ativo");
};

btnClose[1].onclick = function () {
  modalGeral[1].classList.remove("registros__modal--ativo");
  modalLaboratorio[0].classList.remove("registros__modal--ativo");
};

//Registro de composição corporal
let btnComposicao = document.getElementsByClassName(
  "registros__botao--composicao"
);
let modalComposicao = document.getElementsByClassName("registros__composicao");

btnComposicao[0].onclick = function () {
  modalGeral[2].classList.add("registros__modal--ativo");
  modalComposicao[0].classList.add("registros__modal--ativo");
};

btnClose[2].onclick = function () {
  modalGeral[2].classList.remove("registros__modal--ativo");
  modalComposicao[0].classList.remove("registros__modal--ativo");
};

//Registro de Fotos
let btnFotos = document.getElementsByClassName("registros__botao--fotos");
let modalFotos = document.getElementsByClassName("registros__fotos");

btnFotos[0].onclick = function () {
  modalGeral[3].classList.add("registros__modal--ativo");
  modalFotos[0].classList.add("registros__modal--ativo");
};

btnClose[3].onclick = function () {
  modalGeral[3].classList.remove("registros__modal--ativo");
  modalMedidas[0].classList.remove("registros__modal--ativo");
};

//Registro de Protocolos
let btnProtocolos = document.getElementsByClassName(
  "registros__botao--protocolos"
);
let modalProtocolos = document.getElementsByClassName("registros__protocolos");

btnProtocolos[0].onclick = function () {
  modalGeral[4].classList.add("registros__modal--ativo");
  modalProtocolos[0].classList.add("registros__modal--ativo");
};

btnClose[4].onclick = function () {
  modalGeral[4].classList.remove("registros__modal--ativo");
  modalProtocolos[0].classList.remove("registros__modal--ativo");
};
