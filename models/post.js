const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

//CHANGE
const postSchema = new Schema({
  content: String,
  date: Date,
//   image: Image,
  commentCounter: Number,
})

const postCollection = mongoose.model('post', postSchema)

//get all
const getAllPosts = () => {
  return postCollection.find({})
}

//get one
const getOnePost = (id) => {
  return postCollection.findById(id)
}

//create
const createPost = (newTopic) => {
  return postCollection.create(newTopic)
}

//update
const updatePost = (id, newTopic)  => {
  return postCollection.findByIdAndUpdate(id, newTopic)
}

//delete
const deletePost = (id) => {
  return postCollection.findByIdAndDelete(id)
}

module.exports = {
  getAllPosts,
  getOnePost,
  createPost,
  updatePost,
  deletePost,
}