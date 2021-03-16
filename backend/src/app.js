const express = require('express')
const morgan = require('morgan')
const router = require('./routes/index')
const cors = require('cors')

const app = express();


//Settings.
app.set('port', 3500)
const db = require('./db')

//Middleware.
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//Routes.
app.use('/', router.users.router)

//Listen
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`)
})