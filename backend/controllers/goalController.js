const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Get goals" });
})

const setGoals =asyncHandler(async (req, res) => {

    if (!req.body.text) {

        res.status(400)
        throw new Error('please add a text field')
    }

    res.status(200).json({ message: "create data" })
})

const updateGoals =asyncHandler(async (req, res) => {
    res.status(200).json({ message: "update data" })
})

const deleteGoals =asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete data id : ${req.params.id}` })
})

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };