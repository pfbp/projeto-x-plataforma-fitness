//Monta o registro de um tipo com várias entradas
class CadastraRegistro {
  constructor(usuario, data, tipo) {
    this._data = new Date(data.getTime());
    this._tipo = tipo;
    this._registros = [];
  }

  adiciona(registro) {
    this._registros.push(registro);
  }
}

//Cria a lista de todos os registros
class ListaRegistros {
  constructor() {
    this._registros = [];
  }

  adiciona(registro) {
    this._registros.push(registro);
  }

  get registros() {
    return [].concat(this._registros);
  }
}
