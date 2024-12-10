const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlenght: [3, 'first name must be at least 3 characters long'],
    },
    lastname: {
        type: String,
        minlenght: [3, 'last name must be at least 3 characters long'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlenght: [5, 'Email must be at least 5 character long']

    },
    password: {
        type: String,
        require: true,
    },
    socketId: {
        type: String,
    }
})

