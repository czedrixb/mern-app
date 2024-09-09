const Workout = require('../models/workoutModel')

// index
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({ createdAt: 1 })
    res.status(200).json(workouts)
}

// show
const getWorkout = async (req, res) => {
    const { id } = req.params

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(404).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
}


// create
const createWorkout = async (req, res) => {
    try {
        const workout = await Workout.create(req.body)
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

// update
const updateWorkout = async (req, res) => {
    const { id } = req.params
    const workout = await Workout.findByIdAndUpdate(id, req.body, { new: true })

    if (!workout) {
        return res.status(404).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
}

// delete
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    const workout = await Workout.findByIdAndDelete(id)

    if (!workout) {
        return res.status(404).json({ error: 'No such workout' })
    }

    res.status(200).json(workout)
}

module.exports = {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout,
}