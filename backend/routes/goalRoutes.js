const express=require('express');
const router =express.Router();

const {getGoals,deleteGoals,setGoals,updateGoals}=require('../controllers/goalController')

router.get('/',getGoals)

router.post('/',setGoals)
router.put('/:id',updateGoals)
router.delete('/:id',deleteGoals)

module.exports=router;