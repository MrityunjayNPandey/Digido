const AboutModel = require("../models/About-model");

const findAllAbouts = () => AboutModel.find();
const findAboutsById = (bid) => AboutModel.findById(bid);
const deleteAboutById = (bid) => AboutModel.deleteOne({ _id: bid });
const addNewAbout = (newAbout) => AboutModel.create(newAbout);
const updateAbout = (bid, updatedAbout) =>
  AboutModel.updateOne({ _id: bid }, { $set: updatedAbout });

module.exports = {
  findAllAbouts,
  findAboutsById,
  deleteAboutById,
  addNewAbout,
  updateAbout,
};
