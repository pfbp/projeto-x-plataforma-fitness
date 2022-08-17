class RegistraComposicao {
  constructor(usuario, medida, valor, data) {
    this._usuario = usuario;
    this._categoria = "composição";
    this._medida = medida;
    this._valor = valor;
    this._data = new Date(data.getTime());
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
}
