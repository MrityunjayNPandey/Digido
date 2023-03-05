const ourClientDao = require('../daos/OurClient-dao')

const findAllOurClients = () => ourClientDao.findAllOurClients()
const findOurClientsById = (bid) => ourClientDao.findOurClientsById(bid)
const deleteOurClientById = (bid) => ourClientDao.deleteOurClientById(bid)
const addNewOurClient = (newOurClient) => ourClientDao.addNewOurClient(newOurClient)
const updateOurClient = (bid, updatedOurClient) => ourClientDao.updateOurClient(bid, updatedOurClient);

module.exports = {
    findAllOurClients,
    findOurClientsById,
    deleteOurClientById,
    addNewOurClient,
    updateOurClient
}