const PostModel = require('../models/Post-model')

const findAllPosts = () => PostModel.find()
const findPostsById = (bid) => PostModel.findById(bid)
const deletePostById = (bid) => PostModel.deleteOne({_id: bid});
const addNewPost = (newPost) => PostModel.create(newPost);
const updatePost = (bid, updatedPost) => PostModel.updateOne({_id: bid}, {$set: updatedPost});

module.exports = {
    findAllPosts,
    findPostsById,
    deletePostById,
    addNewPost,
    updatePost
}