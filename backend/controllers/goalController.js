const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
var fs = require('fs');

const getGoals = asyncHandler(async (req, res) => {

    const goals = await Goal.find();
    res.status(200).json(goals);
    // res.send("jhjhj")
    // return console.log("hello world");
})

const setGoals = asyncHandler(async (req, res, next) => {

})

const updateGoals = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400)
        throw new Error("Goal not found");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(200).json(updatedGoal);
})

const deleteGoals = asyncHandler(async (req, res) => {


    const goal = await Goal.findById(req.params.id);

    if (!goal) {
        res.status(400)
        throw new Error("Goal not found");
    }
    
    const deleteFile = goal.image;
    if (fs.existsSync(deleteFile)) {
        fs.unlink(deleteFile, (err) => {
            if (err) {
                console.log(err);
            }
            console.log('deleted');
        })
    }

    await goal.remove();

    res.status(200).json({ message: `delete data id : ${req.params.id}` })
})

module.exports = { getGoals, setGoals, updateGoals, deleteGoals };