const userDao = require('../daos/User-dao')

const findAllUsers = () => userDao.findAllUsers()
const findUsersById = (bid) => userDao.findUsersById(bid)
const deleteUserById = (bid) => userDao.deleteUserById(bid)
const addNewUser = (newUser) => userDao.addNewUser(newUser)
const updateUser = (bid, updatedUser) => userDao.updateUser(bid, updatedUser);

module.exports = {
    findAllUsers,
    findUsersById,
    deleteUserById,
    addNewUser,
    updateUser
}