const express=require('express');
const router =express.Router();
const multer  = require('multer')
const Goal = require('../models/goalModel')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
})


const upload = multer({ 
  storage: storage,
})

const {getGoals,deleteGoals,setGoals,updateGoals}=require('../controllers/goalController')

router.get('/',getGoals)

router.post('/',upload.single('myimage'),(req,res,next)=>{
    console.log(req.file);

    if (!req.body.text) {

        res.status(400)
        throw new Error('please add a text field')
    }

    const goal = Goal.create({
        text:req.body.text,
        image:req.file.path
    })

    res.status(200).send(req.file)
})
router.put('/:id',updateGoals)
router.delete('/:id',deleteGoals)

module.exports=router;