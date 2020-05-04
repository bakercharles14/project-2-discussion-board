const express = require('express')
const topicModel = require('../models/topic.js')
const postModel = require('../models/post.js')
const commentModel = require('../models/comment.js')

const topicRouter = express.Router()

// GET ALL Route
topicRouter.get('/', (req, res) => {
  topicModel.getAllTopics()
    .then((allTopics) => {
      res.render('topic/allTopics', { allTopics })
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})

// CREATE NEW FACILITY FORM
topicRouter.get('/new', (req, res) => {
  res.render('topic/createTopic')
})

// EDIT FACILITY FORM
topicRouter.get('/:id/edit', (req, res) => {
  topicModel.getOneTopic(req.params.id)
    .then((singleTopic) => {
      res.render('topic/editTopic', { singleTopic })
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})

// GET ONE
topicRouter.get('/:id', (req, res) => {
  topicModel.getOneTopic(req.params.id)
    .then((singleTopic) => {
      res.render('topic/singleTopic', { singleTopic })
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})

// CREATE
topicRouter.post('/', (req, res) => {
  topicModel.createTopic(req.body)
    .then(() => {
      res.redirect('/topic')
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})

// UPDATE
topicRouter.put('/:id', (req, res) => {
  topicModel.updateTopic(req.params.id, req.body)
    .then(() => {
      res.redirect(`/topic/${req.params.id}`)
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})


// DELETE
topicRouter.delete('/:id', (req, res) => {
  topicModel.deleteTopic(req.params.id)
    .then(() => {
      res.redirect('/topic')
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})

module.exports = topicRouter
