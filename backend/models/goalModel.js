const mongoose = require('mongoose')

const goalSchema = new mongoose.Schema({

    text: { type: String, required: [true, 'please add  a text value'] },
    image: {type:String, required : [true,'please add a Image']},
},

    {
        timestamps: true
    })

module.exports = mongoose.model('Goal', goalSchema)