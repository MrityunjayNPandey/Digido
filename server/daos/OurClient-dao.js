const OurClientModel = require('../models/OurClient-model')

const findAllOurClients = () => OurClientModel.find()
const findOurClientsById = (bid) => OurClientModel.findById(bid)
const deleteOurClientById = (bid) => OurClientModel.deleteOne({_id: bid});
const addNewOurClient = (newOurClient) => OurClientModel.create(newOurClient);
const updateOurClient = (bid, updatedOurClient) => OurClientModel.updateOne({_id: bid}, {$set: updatedOurClient});

module.exports = {
    findAllOurClients,
    findOurClientsById,
    deleteOurClientById,
    addNewOurClient,
    updateOurClient
}