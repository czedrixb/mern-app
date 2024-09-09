require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoute = require('./routes/workoutRoute')

const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts/', workoutRoute)

// connect to db
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
        console.log('connected to database')
        app.listen(process.env.PORT, () => {
            console.log('listening to port ', process.env.PORT)
        })
    }).catch((error) => {
        console.log(error)
    })