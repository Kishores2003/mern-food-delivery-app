const express = require('express');
const router = express.Router();
const User = require('../models/user'); // Make sure this path is correct
const { body, validationResult } = require('express-validator');
const jwt =require("jsonwebtoken")
const jwtSecret="praveenmasterofcoding"
const bcrypt = require('bcryptjs');

router.post("/createuser", [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password', "Incorrect Password").isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password, salt)

    try {
        const newUser = await User.create({
            name: req.body.name,
            password: secPassword,
            email: req.body.email,
            location: req.body.location // Assuming location is part of your User schema
        });
        res.json({ success: true, user: newUser }); // Optionally, send back the created user object
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
})
router.post("/loginuser", [
    body('email').isEmail(),
    body('password', "Incorrect Password").isLength({ min: 5 }).withMessage('Password must be at least 5 characters long')

], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    let email = req.body.email;
    try {
        let userData = await User.findOne({ email });
        if (!userData) {
            return res.status(400).json({ errors: "Try logging with correct credentials" });
        }
        const pwdCompare =await bcrypt.compare(req.body.password,userData.password)
        if (!pwdCompare) {
            return res.status(400).json({ errors: "Try logging with correct credentials" });
        }
const data ={
    user:{
        id:userData.id
    }
}
const authToken=jwt.sign(data,jwtSecret)

        return res.json({ success: true,authToken:authToken }); // Optionally, send back the created user object

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
})


module.exports = router;
