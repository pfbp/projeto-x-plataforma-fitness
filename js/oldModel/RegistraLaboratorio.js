class RegistraLaboratorio {
  constructor(laboratorio, valor, idade, genero) {
    this._laboratorio = laboratorio;
    this._valor = valor;
    this._limiteSuperior = (laboratorio, idade, genero) => {
      return limiteSuperiorLaboratorio(laboratorio, idade, genero);
    };
    this._limiteInferior = (laboratorio, idade, genero) => {
      return limiteInferiorLaboratorio(laboratorio, idade, genero);
    };
  }
}
