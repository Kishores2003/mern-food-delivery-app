const express = require('express');
const router = express.Router();
const Order = require('../models/Orders');

router.post('/orderData', async (req, res) => {
    // Extract order data and order date from the request body
    let data = req.body.order_data;
    await data.splice(0, 0, { Order_date: req.body.order_date });

    // Find an existing order by email
    let eId = await Order.findOne({ 'email': req.body.email });
    console.log(eId);

    if (eId === null) {
        // If no existing order found, create a new order
        try {
            await Order.create({
                email: req.body.email,
                order_data: [data]
            }).then(() => {
                res.json({ success: true });
            });
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error: " + error.message);
        }
    } else {
        // If an existing order is found, update it
        try {
            await Order.findOneAndUpdate(
                { email: req.body.email },
                { $push: { order_data: data } }
            ).then(() => {
                res.json({ success: true })
            })
        } catch (error) {
            console.log(error.message);
            res.status(500).send("Server Error: " + error.message);
        }
    }
});

router.post('/myorderData', async (req, res) => {
try{
    let myData =await Order.findOne({'email':req.body.email})
    res.json({orderData:myData})
}catch(error){
    res.send("Server Error: " + error.message);
}
})
module.exports = router;
