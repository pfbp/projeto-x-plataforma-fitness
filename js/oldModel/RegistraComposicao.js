class RegistraComposicao {
  constructor(composicao, valor, idade, genero) {
    this._composicao = composicao;
    this._valor = valor;
    this._limiteSuperior = (composicao, idade, genero) => {
      return limiteSuperiorComposicao(composicao, idade, genero);
    };
    this._limiteInferior = (composicao, idade, genero) => {
      return limiteInferiorComposicao(composicao, idade, genero);
    };
  }
}
