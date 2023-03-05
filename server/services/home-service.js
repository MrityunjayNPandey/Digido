const homeDao = require('../daos/Home-dao')

const findAllHomes = () => homeDao.findAllHomes()
const findHomesById = (bid) => homeDao.findHomesById(bid)
const deleteHomeById = (bid) => homeDao.deleteHomeById(bid)
const addNewHome = (newHome) => homeDao.addNewHome(newHome)
const updateHome = (bid, updatedHome) => homeDao.updateHome(bid, updatedHome);

module.exports = {
    findAllHomes,
    findHomesById,
    deleteHomeById,
    addNewHome,
    updateHome
}