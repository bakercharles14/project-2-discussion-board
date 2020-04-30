const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

//CHANGE
const topicSchema = new Schema({
  title: String,
  description: String,
  dateCreated: Date,
  postCounter: Number
})

const topicCollection = mongoose.model('topic', topicSchema)

//get all
const getAllTopics = () => {
  return topicCollection.find({})
}

//get one
const getOneTopic = (id) => {
  return topicCollection.findById(id)
}

//create
const createTopic = (newTopic) => {
  return topicCollection.create(newTopic)
}

//update
const updateTopic = (id, newTopic)  => {
  return topicCollection.findByIdAndUpdate(id, newTopic)
}

//delete
const deleteTopic = (id) => {
  return topicCollection.findByIdAndDelete(id)
}

//CHANGE
module.exports = {
  getAllTopics,
  getOneTopic,
  createTopic,
  updateTopic,
  deleteTopic
}