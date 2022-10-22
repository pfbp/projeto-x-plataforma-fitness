import records from "../models/Record-model.js";

class RecordsController {
    static createRecord = (req, res) => {        
        let record = new records(req.body);
        record.save((err) => {
            if(err) {
            res.status(500).send({message: `${err.message} - Not able to register record`})
            } else {
            res.status(201).send(record.toJSON())
            }
        });
    }

    static getAllRecords = (req, res) => {

    }

    static getRecordById = (req, res) => {

    }

    static getRecordsByFilter = (req, res) => {

    }

    static updateRecordById = (req, res) => {

    }

    static deleteRecordById = (req, res) => {

    }
}

export default RecordsController;

// static listarRecords = (req, res) => {
//   records.find()
//     .populate('autor')
//     .exec((err, records) => {
//       res.status(200).json(records)
// })
// }

// static listarRecordPorId = (req, res) => {
//   const id = req.params.id;

//   records.findById(id)
//     .populate('autor', 'nome')
//     .exec((err, records) => {
//     if(err) {
//       res.status(400).send({message: `${err.message} - Id do record não localizado.`})
//     } else {
//       res.status(200).send(records);
//     }
//   })
// }

// static cadastrarRecord = (req, res) => {
//   let record = new records(req.body);

//   record.save((err) => {

//     if(err) {
//       res.status(500).send({message: `${err.message} - falha ao cadastrar record.`})
//     } else {
//       res.status(201).send(record.toJSON())
//     }
//   })
// }

// static atualizarRecord = (req, res) => {
//   const id = req.params.id;

//   records.findByIdAndUpdate(id, {$set: req.body}, (err) => {
//     if(!err) {
//       res.status(200).send({message: 'record atualizado com sucesso'})
//     } else {
//       res.status(500).send({message: err.message})
//     }
//   })
// }

// static excluirRecord = (req, res) => {
//   const id = req.params.id;

//   records.findByIdAndDelete(id, (err) => {
//     if(!err){
//       res.status(200).send({message: 'record removido com sucesso'})
//     } else {
//       res.status(500).send({message: err.message})
//     }
//   })
// }

// static listarRecordPorEditora = (req, res) => {
//   const editora = req.query.editora

//   records.find({'editora': editora}, {}, (err, records) => {
//     res.status(200).send(records);

//   })
// }