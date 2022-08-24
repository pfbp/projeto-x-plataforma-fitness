atualizaRegistros();
var registros;

function atualizaRegistros() {
  registros = new ListaRegistros();
}

function registrosController(registro) {
  registros.adiciona(registro);
  console.log(registros);
}
