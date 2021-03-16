const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userModel = new Schema({
    name: String,
    description: String,
    age: Number
})

module.exports = mongoose.model('userModel', userModel)