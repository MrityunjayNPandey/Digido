const postDao = require('../daos/Post-dao')

const findAllPosts = () => postDao.findAllPosts()
const findPostsById = (bid) => postDao.findPostsById(bid)
const deletePostById = (bid) => postDao.deletePostById(bid)
const addNewPost = (newPost) => postDao.addNewPost(newPost)
const updatePost = (bid, updatedPost) => postDao.updatePost(bid, updatedPost);

module.exports = {
    findAllPosts,
    findPostsById,
    deletePostById,
    addNewPost,
    updatePost
}