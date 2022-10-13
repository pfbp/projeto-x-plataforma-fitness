import protocols from "../models/Protocol-model.js";

class ProtocolsController {

  static listarProtocols = (req, res) => {
    protocols.find()
      .populate('autor')
      .exec((err, protocols) => {
        res.status(200).json(protocols)
  })
  }

  static listarProtocolPorId = (req, res) => {
    const id = req.params.id;

    protocols.findById(id)
      .populate('autor', 'nome')
      .exec((err, protocols) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do protocol não localizado.`})
      } else {
        res.status(200).send(protocols);
      }
    })
  }

  static cadastrarProtocol = (req, res) => {
    let protocol = new protocols(req.body);

    protocol.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar protocol.`})
      } else {
        res.status(201).send(protocol.toJSON())
      }
    })
  }

  static atualizarProtocol = (req, res) => {
    const id = req.params.id;

    protocols.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'protocol atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirProtocol = (req, res) => {
    const id = req.params.id;

    protocols.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'protocol removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static listarProtocolPorEditora = (req, res) => {
    const editora = req.query.editora

    protocols.find({'editora': editora}, {}, (err, protocols) => {
      res.status(200).send(protocols);

    })
  }



}

export default ProtocolsController