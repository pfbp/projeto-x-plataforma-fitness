class registrosController {
  constructor() {
        
    this._inputData = document.querySelector('#data');
    this._inputNome = document.querySelectorAll('#nome');
    this._inputValor = document.querySelectorAll('#valor');
  }

  adiciona(event) {
    event.preventDefault();
    
  }