const express = require('express');
const router = express.Router();

router.post('/foodData',(req,res)=>{
    try{
        console.log(global.food_items);
        res.send({food_items:global.food_items,foodCategory:global.foodCategory});
    }
        catch(error){
           console.log(error.message);
           res.send("Server error")
        }
    
})

module.exports = router;
