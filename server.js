require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000
const tasksRouter = require('./routes/tasks')

app.use(express.json())
app.use(express.static('build'))

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser:true})
const db = mongoose.connection
db.on('error', (err)=>{console.log(err)})
db.once('open', ()=>{console.log('Connected to DB')})

app.use('/tasks', tasksRouter)

app.listen(port, () => console.log('Sever Started: port ' + port))