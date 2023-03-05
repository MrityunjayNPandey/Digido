const FooterModel = require("../models/Footer-model");

const findAllFooters = () => FooterModel.find();
const findFootersById = (bid) => FooterModel.findById(bid);
const deleteFooterById = (bid) => FooterModel.deleteOne({ _id: bid });
const addNewFooter = (newFooter) => FooterModel.create(newFooter);
const updateFooter = (bid, updatedFooter) =>
  FooterModel.updateOne({ _id: bid }, { $set: updatedFooter });

module.exports = {
  findAllFooters,
  findFootersById,
  deleteFooterById,
  addNewFooter,
  updateFooter,
};
