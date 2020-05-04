const express = require('express')
const app = express()
const methodOverride = require('method-override')

//CHANGE
const topicRouter = require('./controllers/topic.js')
const postRouter = require('./controllers/post.js')

app.set('view engine', 'hbs')

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname+"/public"))

app.get('/', (req, res) => {
    res.json('ok')
})

//CHANGE
app.use('/topic', topicRouter)
app.use('/post', postRouter)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`App is listening on PORT ${port}`)
})
