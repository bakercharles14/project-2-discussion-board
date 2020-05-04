const express = require('express')
const postModel = require('../models/post.js')
const topicModel = require('../models/topic.js')

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

// CREATE NEW POST FORM when i have associations
// postRouter.get('/new/:id', (req, res) => {
//     topicModel.getOneTopic(req.params.id)
//     .then((singleTopic) => {
//         res.render('post/createPost', {singleTopic})
//     })
// })

//create new post form for before associations
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

// GET ONE
postRouter.get('/:id', (req, res) => {
    postModel.getOnePost(req.params.id)
    .then((singlePost) => {
      res.render('post/singlePost', { singlePost })
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
      res.redirect('/post')
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