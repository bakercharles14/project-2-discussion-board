const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

//CHANGE
const commentSchema = new Schema({
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
    createComment,
    updateComment,
    deleteComment,
}