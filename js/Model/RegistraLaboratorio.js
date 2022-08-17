class RegistraLaboratorio {
  constructor(usuario, medida, valor, data, referenciamin, referenciamax) {
    this._usuario = usuario;
    this._categoria = "laboratório";
    this._medida = medida;
    this._valor = valor;
    this._data = new Date(data.getTime());
    this._referenciamin = referenciamin;
    this._referenciamax = referenciamax;
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

  get referenciamin() {
    return this._referenciamin;
  }

  get referenciamax() {
    return this._referenciamax;
  }
}
