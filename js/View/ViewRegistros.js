function adicionaItemMedida(event) {
  event.preventDefault();
  let novoElemento = document.createElement("div");
  novoElemento.classList.add("registrosModal__item");

  let child = document.createElement("label");
  child.textContent = "Item";
  child.setAttribute("for", "nome");
  novoElemento.appendChild(child);

  child = document.createElement("input");
  child.setAttribute("type", "text");
  child.setAttribute("id", "nome");
  child.setAttribute("placeholder", "Escolha um item...");
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
  let referencia = document.querySelector(".registrosModal__item");

  lista.insertBefore(novoElemento, referencia);

  atualizaListaRemover();
  habilitaRemover();
}

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
