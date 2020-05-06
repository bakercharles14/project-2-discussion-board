const express = require('express')
const topicModel = require('../models/topic.js')
const postModel = require('../models/post.js')
const commentModel = require('../models/comment.js')

const postRouter = express.Router()

// GET ALL Route
postRouter.get('/', (req, res) => {
    postModel.getAllPosts()
    .then((allPosts) => {
      res.render('post/allPostsInTopic', { allPosts })
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})

//create new post form 
postRouter.get('/new', (req, res) => {
  res.render('post/createPost')
})

// EDIT POST FORM
postRouter.get('/:id/edit', (req, res) => {
    postModel.getOnePost(req.params.id)
    .then((singlePost) => {
      res.render('post/editPost', { singlePost })
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})

//get all comments by post id
postRouter.get('/:id', (req, res) => {
  postModel.getOnePost(req.params.id)
    .then((singlePost) => {
      commentModel.getAllCommentsByPostId(req.params.id)
        .then((allCommentsInPost) => {
          res.render('post/singlePost', { singlePost, allCommentsInPost })
        })
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})

// CREATE
postRouter.post('/', (req, res) => {
    postModel.createPost(req.body)
    .then(() => {
      res.redirect(`/topic/${req.body.topicId}`)
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})

// UPDATE
postRouter.put('/:id', (req, res) => {
    postModel.updatePost(req.params.id, req.body)
    .then(() => {
      res.redirect(`/post/${req.params.id}`)
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})


// DELETE
postRouter.delete('/:id', (req, res) => {
    postModel.deletePost(req.params.id)
    .then(() => {
      res.redirect('/post')
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})

module.exports = postRouter