const HomeModel = require('../models/Home-model')

const findAllHomes = () => HomeModel.find()
const findHomesById = (bid) => HomeModel.findById(bid)
const deleteHomeById = (bid) => HomeModel.deleteOne({_id: bid});
const addNewHome = (newHome) => HomeModel.create(newHome);
const updateHome = (bid, updatedHome) => HomeModel.updateOne({_id: bid}, {$set: updatedHome});

module.exports = {
    findAllHomes,
    findHomesById,
    deleteHomeById,
    addNewHome,
    updateHome
}