const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

//CHANGE
const commentSchema = new Schema({
    postId: {
        type: String,
        required: true
    },
    content: String,
    date: Date,
})

const commentCollection = mongoose.model('comment', commentSchema)

//get all
const getAllComments = () => {
    return commentCollection.find({})
}

//get one
const getOneComment = (id) => {
    return commentCollection.findById(id)
}

//get all comments by post id
const getAllCommentsByPostId = (postId) => {
    return commentCollection.find({'postId': postId})
}

//create
const createComment = (newComment) => {
    return commentCollection.create(newComment)
}

//update
const updateComment = (id, newComment) => {
    return commentCollection.findByIdAndUpdate(id, newComment)
}

//delete
const deleteComment = (id) => {
    return commentCollection.findByIdAndDelete(id)
}

module.exports = {
    getAllComments,
    getOneComment,
    getAllCommentsByPostId,
    createComment,
    updateComment,
    deleteComment,
}