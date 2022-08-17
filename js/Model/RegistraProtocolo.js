class RegistraProtocolo {
  constructor(usuario, medida, valor, data, prazo) {
    this._usuario = usuario;
    this._categoria = "medida";
    this._medida = medida;
    this._valor = valor;
    this._data = new Date(data.getTime());
    this._data = prazo;
  }

  get usuario() {
    return this._usuario;
  }

  get categoria() {
    return this._categoria;
  }

  get medida() {
    return this._medida;
  }

  get valor() {
    return this._valor;
  }

  get data() {
    return new Date(this._data.getTime());
  }

  get prazo() {
    return this._prazo;
  }
}
