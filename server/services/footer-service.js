const footerDao = require("../daos/Footer-dao");

const findAllFooters = () => footerDao.findAllFooters();
const findFootersById = (bid) => footerDao.findFootersById(bid);
const deleteFooterById = (bid) => footerDao.deleteFooterById(bid);
const addNewFooter = (newFooter) => footerDao.addNewFooter(newFooter);
const updateFooter = (bid, updatedFooter) =>
  footerDao.updateFooter(bid, updatedFooter);

module.exports = {
  findAllFooters,
  findFootersById,
  deleteFooterById,
  addNewFooter,
  updateFooter,
};
