const express = require('express')
const Workout = require('../models/workoutModel')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ message: 'GET all workouts' })
})

router.get('/:id', (req, res) => {
    res.json({ message: 'GET single workout' })
})

// create
router.post('/', async (req, res) => {
    try {
        const workout = await Workout.create(req.body)
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

router.delete('/:id', (req, res) => {
    res.json({ message: 'DELETE a new workout' })
})

router.put('/:id', (req, res) => {
    res.json({ message: 'UPDATE a new workout' })
})

module.exports = router