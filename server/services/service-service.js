const serviceDao = require('../daos/Service-dao')

const findAllServices = () => serviceDao.findAllServices()
const findServicesById = (bid) => serviceDao.findServicesById(bid)
const deleteServiceById = (bid) => serviceDao.deleteServiceById(bid)
const addNewService = (newService) => serviceDao.addNewService(newService)
const updateService = (bid, updatedService) => serviceDao.updateService(bid, updatedService);

module.exports = {
    findAllServices,
    findServicesById,
    deleteServiceById,
    addNewService,
    updateService
}