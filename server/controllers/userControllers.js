const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const User = require("../Models/userModel");

const registerUser = asyncHandler(async(req, res) => {
    const {name, email, password, pic} = req.body;
    
    if(!name || !email || !password) {
        res.status(400)
        throw new Error("Please enter all Fields");
    }

    const userExists = await User.findOne({email: email});
    if(userExists) {
        res.status(400)
        throw new Error("user Already Exists");
    }

    const user = await User.create({
         name,
         email,
         password,
         pic
    });

    if(user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        })
    } else {
        throw new Error("user Not Found")
    }
})

const authUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email: email})

    if(user && user.password == password/*(await user.matchPassword(password))*/) {
        res.json({
             _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        })
    } else {
        throw new Error("Invalid ID");
    }
})

module.exports = {registerUser, authUser};