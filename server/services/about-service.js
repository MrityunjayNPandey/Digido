const aboutDao = require("../daos/About-dao");

const findAllAbouts = () => aboutDao.findAllAbouts();
const findAboutsById = (bid) => aboutDao.findAboutsById(bid);
const deleteAboutById = (bid) => aboutDao.deleteAboutById(bid);
const addNewAbout = (newAbout) => aboutDao.addNewAbout(newAbout);
const updateAbout = (bid, updatedAbout) =>
  aboutDao.updateAbout(bid, updatedAbout);

module.exports = {
  findAllAbouts,
  findAboutsById,
  deleteAboutById,
  addNewAbout,
  updateAbout,
};
