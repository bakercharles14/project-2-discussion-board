const express = require('express')
const app = express()
const methodOverride = require('method-override')

//CHANGE
const templateRouter = require('./controllers/template.js')

app.set('view engine', 'hbs')

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static(__dirname+"/public"))

app.get('/', (req, res) => {
    res.json('ok')
})

//CHANGE
app.use('/helloworld', templateRouter)

const port = 3000

app.listen(port, () => {
    console.log(`App is listening on PORT ${port}`)
})
