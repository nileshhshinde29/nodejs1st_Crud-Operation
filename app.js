const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlianDBex'

const app = express()

mongoose.connect(url, { useNewUrlParser: true })

const con = mongoose.connection

con.on('open',  ()=> {
    console.log("connected...")
})

const alienRouter = require('./router/alian')

app.use(express.json())
app.use('/alian', alienRouter)

app.listen(9000, ()=>    {
    console.log('ServerStarted..')
})