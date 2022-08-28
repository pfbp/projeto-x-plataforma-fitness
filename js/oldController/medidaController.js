const formRegistroMedidas = document.querySelector("#formRegistroMedidas");
formRegistroMedidas.addEventListener("submit", adicionaRegistroMedida);

function adicionaRegistroMedida(event) {
  event.preventDefault();
  let data = document.querySelector("#dataMedida").value;
  let registro = new CadastraRegistro(data, "Medidas");

  let nomes = document.querySelectorAll("#nomeMedida");
  let valores = document.querySelectorAll("#valorMedida");

  for (let i = 0; i < nomes.length; i++) {
    let nome = nomes[i].selectedOptions[0].value;
    let valor = valores[i].value;
    let medida = new RegistraMedida(nome, valor);
    registro.adiciona(medida);
  }

  registrosController(registro);

  removeElementosExtras();
  modalNovaMedida.classList.remove("registros__modal--ativo");
  let form = document.querySelector(".registrosModal__form");
  form.reset();
}
