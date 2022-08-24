//Abrindo e fechando o Modal
const $ = document.querySelector.bind(document);
const modalNovaMedida = $("#modalNovaMedida");
const botaoAbreModalMedida = $("#abreModalMedida");
const botaoFechaModalMedida = $("#fechaModalMedida");

botaoAbreModalMedida.addEventListener("click", () => {
  modalNovaMedida.classList.add("registros__modal--ativo");
  atualizaListaRemover();
  desabilitaRemover();
  let item = document.querySelector("#nome");
  preenchePossiveisMedidas(item);
});

botaoFechaModalMedida.addEventListener("click", (event) => {
  event.preventDefault();
  removeElementosExtras();
  modalNovaMedida.classList.remove("registros__modal--ativo");
  let form = document.querySelector(".registrosModal__form");
  form.reset();
});

//Adicionando um novo item no DOM
const botaoAdicionaItemMedida = $("#adicionaItemMedida");
botaoAdicionaItemMedida.addEventListener("click", adicionaItemMedida);

function adicionaItemMedida(event) {
  event.preventDefault();
  let novoElemento = document.createElement("div");
  novoElemento.classList.add("registrosModal__item");

  let child = document.createElement("label");
  child.textContent = "Item";
  child.setAttribute("for", "nome");
  novoElemento.appendChild(child);

  child = document.createElement("select");
  child.setAttribute("id", "nome");
  child.setAttribute("name", "nome");
  preenchePossiveisMedidas(child);
  novoElemento.appendChild(child);

  child = document.createElement("label");
  child.textContent = "Valor";
  child.setAttribute("for", "valor");
  novoElemento.appendChild(child);

  child = document.createElement("input");
  child.setAttribute("type", "number");
  child.setAttribute("id", "valor");
  child.setAttribute("placeholder", "0.0");
  novoElemento.appendChild(child);

  child = document.createElement("span");
  novoElemento.appendChild(child);
  child = document.createElement("span");
  novoElemento.appendChild(child);

  child = document.createElement("button");
  child.setAttribute("id", "remover");
  child.textContent = "Remover";
  novoElemento.appendChild(child);

  let lista = document.querySelector(".registrosModal__lista");
  let referencia = document.querySelector("#adicionaItemMedida");

  lista.insertBefore(novoElemento, referencia);

  atualizaListaRemover();
  habilitaRemover();
}

//Manipulando o botão de remover item da lista
function atualizaListaRemover() {
  let buttonRemover = document.querySelectorAll("#remover");
  for (let i = 0; i < buttonRemover.length; i++) {
    buttonRemover[i].addEventListener("click", removeItemMedida);
  }
}

function desabilitaRemover() {
  let itensLista = document.querySelectorAll(".registrosModal__item");
  if (itensLista.length === 1) {
    let buttonRemover = document.querySelectorAll("#remover");
    buttonRemover[0].setAttribute("disabled", "");
  }
}

function habilitaRemover() {
  let buttonRemover = document.querySelectorAll("#remover");
  if (buttonRemover.length !== 1) {
    for (let i = 0; i < buttonRemover.length; i++) {
      buttonRemover[i].removeAttribute("disabled");
    }
  }
}

function removeItemMedida(event) {
  event.preventDefault();
  let elemento = this.parentNode;
  elemento.remove();
  desabilitaRemover();
}

function removeElementosExtras() {
  let itensLista = document.querySelectorAll(".registrosModal__item");
  for (let i = 1; i < itensLista.length; i++) {
    itensLista[i].remove();
  }
  desabilitaRemover();
}

//Gerando o droplist a partir da lista de possíveis medidas
const opcoesMedidas = [
  "Altura",
  "Peso",
  "Pescoço",
  "Peitoral",
  "Abdomem",
  "Cintura",
  "Quadril",
  "Bíceps direito",
  "Bíceps esquerdo",
  "Antebraço esquerdo",
  "Antebraço direito",
  "Coxa esquerda",
  "Coxa direita",
  "Panturrilha esquerda",
  "Panturrilha direita"
];

function preenchePossiveisMedidas(item) {
  let child = document.createElement("option");
  child.textContent = "Escolha uma opção";
  child.setAttribute("value", "");
  child.setAttribute("disabled", "");
  child.setAttribute("selected", "");
  child.setAttribute("hidden", "");
  item.appendChild(child);

  opcoesMedidas.forEach((opcao) => {
    let child = document.createElement("option");
    child.textContent = opcao;
    child.setAttribute("value", opcao);
    item.appendChild(child);
  });
}
