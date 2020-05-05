const mongoose = require('../db/connection.js')
const Schema = mongoose.Schema

//CHANGE
const postSchema = new Schema({
    //to be added for associations
    topicId: {
        type: String,
        required: true
    },
    content: String,
    date: Date,
    image: String,
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

//get by topic
const getAllPostsByTopicId = (topicId) => {
    return postCollection.find({'topicId': topicId})
}

//create
const createPost = (newPost) => {
    return postCollection.create(newPost)
}

//update
const updatePost = (id, newPost) => {
    return postCollection.findByIdAndUpdate(id, newPost)
}

//delete
const deletePost = (id) => {
    return postCollection.findByIdAndDelete(id)
}

module.exports = {
    getAllPosts,
    getOnePost,
    getAllPostsByTopicId,
    createPost,
    updatePost,
    deletePost,
}