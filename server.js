const express = require('express')
const app = express()
const methodOverride = require('method-override')

//CHANGE
const topicRouter = require('./controllers/topic.js')
const postRouter = require('./controllers/post.js')
const commentRouter = require('./controllers/comment.js')

app.set('view engine', 'hbs')

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname+"/Public"))

app.get('/', (req, res) => {
    res.redirect('/topic')
})

//CHANGE
app.use('/topic', topicRouter)
app.use('/post', postRouter)
app.use('/comment', commentRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App is listening on PORT ${port}`)
})
