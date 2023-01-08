import users from "../models/User-model.js";

class UsersController {
  static registerUser = (req, res) => {
    let user = new users(req.body);
    user.save((err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - Not able to register user`});
      } else {
        res.status(201).send(user.toJSON());
      }
    });
  }

  static loginUser = (req, res) => {
    // Logic for login
  }

  static getAllUsers = (req, res) => {
    users.find((err, users) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Not able to retrieve users`});
      } else {
        res.status(200).json(users);     
      }
    });
  }

  static getUserById = (req, res) => {
    const id = req.params.id;
    users.findById(id, (err, users) => {
      if(err) {
        res.status(400).send({message: `${err.message} - No able to retrive user by id ${id}`});
      } else {
        res.status(200).send(users);
      }
    });
  }

  static getUsersByFilter = (req, res) => {
    const filter = req.query.filter;
    records.find({'filter': filter}, {}, (err, records) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Not able to retrive user by filter`});
      } else {
        res.status(200).send(users);
      }
    });
  }

  static updateUserById = (req, res) => {
    const id = req.params.id;
    users.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(err) {
        res.status(500).send({message: `${err.message} - Not able to update user by id ${id}`});
      } else {
        res.status(200).send({message: `User ${id} updated`});
      }
    });
  }

  static deleteUserById = (req, res) => {
    const id = req.params.id;
      users.findByIdAndDelete(id, (err) => {
      if(err){
        res.status(500).send({message: `${err.message} - Not able to remove user by id ${id}`});
      } else {
        res.status(200).send({message: `User ${id} removed`});
      }
    });
  }
}

export default UsersController;