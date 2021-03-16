const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/users')
.then((db) => {
    console.log('DB Connected successfully!')
})
.catch((err) => {
    console.log('Error during DB Connection')
})

module.exports = mongoose