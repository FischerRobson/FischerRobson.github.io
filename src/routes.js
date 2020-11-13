const express = require('express')

const CommentsController = require('./controllers/CommentController')

const routes = express.Router()

routes.post('/comments', CommentsController.create)

routes.get('/comments', CommentsController.index)

module.exports = routes