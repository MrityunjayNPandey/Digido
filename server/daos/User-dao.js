const UserModel = require("../models/User-model");

const findAllUsers = () => UserModel.find();
const findUsersById = (bid) => UserModel.findById(bid);
const deleteUserById = (bid) => UserModel.deleteOne({ _id: bid });
const addNewUser = (newUser) => UserModel.create(newUser);
const updateUser = (bid, updatedUser) =>
  UserModel.updateOne({ _id: bid }, { $set: updatedUser });

module.exports = {
  findAllUsers,
  findUsersById,
  deleteUserById,
  addNewUser,
  updateUser,
};
