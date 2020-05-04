const express = require('express')
const commentModel = require('../models/comment.js')

const commentRouter = express.Router()

// GET ALL Route
commentRouter.get('/', (req, res) => {
    commentModel.getAllComments()
        .then((allComments) => {
            res.render('comment/allCommentsInPost', { allComments })
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// CREATE NEW FACILITY FORM
commentRouter.get('/new', (req, res) => {
    res.render('comment/createComment')
})

// EDIT FACILITY FORM
commentRouter.get('/:id/edit', (req, res) => {
    commentModel.getOneComment(req.params.id)
        .then((singleComment) => {
            res.render('comment/editComment', { singleComment })
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// GET ONE
commentRouter.get('/:id', (req, res) => {
    commentModel.getOneComment(req.params.id)
        .then((singleComment) => {
            res.render('comment/singleComment', { singleComment })
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// CREATE
commentRouter.post('/', (req, res) => {
    commentModel.createComment(req.body)
        .then(() => {
            res.redirect('/comment')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

// UPDATE
commentRouter.put('/:id', (req, res) => {
    commentModel.updateComment(req.params.id, req.body)
        .then(() => {
            res.redirect(`/comment/${req.params.id}`)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})


// DELETE
commentRouter.delete('/:id', (req, res) => {
    commentModel.deleteComment(req.params.id)
        .then(() => {
            res.redirect('/comment')
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
})

module.exports = commentRouter
