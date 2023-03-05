const ServiceModel = require('../models/Service-model')

const findAllServices = () => ServiceModel.find()
const findServicesById = (bid) => ServiceModel.findById(bid)
const deleteServiceById = (bid) => ServiceModel.deleteOne({_id: bid});
const addNewService = (newService) => ServiceModel.create(newService);
const updateService = (bid, updatedService) => ServiceModel.updateOne({_id: bid}, {$set: updatedService});

module.exports = {
    findAllServices,
    findServicesById,
    deleteServiceById,
    addNewService,
    updateService
}