import users from "../models/User.js";

class UsersController {

  static listarUsers = (req, res) => {
    users.find((err, users) => {
      res.status(200).json(users)
  })
  }

  static listarUserPorId = (req, res) => {
    const id = req.params.id;

    users.findById(id, (err, users) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do user não localizado.`})
      } else {
        res.status(200).send(users);
      }
    })
  }

  static cadastrarUser = (req, res) => {
    let user = new users(req.body);

    user.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar user.`})
      } else {
        res.status(201).send(user.toJSON())
      }
    })
  }

  static atualizarUser = (req, res) => {
    const id = req.params.id;

    users.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'user atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirUser = (req, res) => {
    const id = req.params.id;

    users.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'user removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default UsersController