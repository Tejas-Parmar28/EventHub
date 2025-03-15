const express = require("express");
const router = express.Router();
const bcrypt=require('bcrypt')
const jwt = require('../../middleware/jwtAssign');
const User = require('../../models/user');
const { default: mongoose } = require("mongoose");

router.post('/register', (req, res, next) => {
    User.findOne({ email: req.body.email })  // Use findOne to check a single user
        .exec()
        .then((existingUser) => {
            if (existingUser) {
                return res.status(400).json({
                    message: 'Email already exists'
                });
            } else {
                // Hash the password before storing it
                bcrypt.hash(req.body.password, 12, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            name: req.body.name,
                            email: req.body.email,
                            password: hash // Store hashed password
                        });
                        user.save()
                            .then(result => res.status(201).json({
                                message: 'User Registered'
                            }))
                            .catch(err => res.status(500).json({
                                error: err
                            }));
                    }
                });
            }
        })
        .catch(err => res.status(500).json({ error: err }));
});


router.post("/signIn", (req, res, next) => {
    User.findOne({ email: req.body.email })
        .exec()
        .then((user) => {
            if (!user) {
                return res.status(400).json({ "message": "User not found" });
            }
            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (result) {
                    let token = jwt.generateJWT({ email: user.email });
                    res.cookie('token', token);
                    return res.status(201).json({ message: "Logged in successfully", isAdmin: user.isAdmin });
                }
                
                // if (result) {
                //     let token = jwt.generateJWT({ email: user.email });
                //     res.cookie('token', token);
                //     return res.status(201).json({ message: "Logged in successfully" });
                // } 
                else {
                    return res.status(400).json({ message: "Password is incorrect" });
                }
            });
        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});


module.exports = router;