const express = require('express')

const router = express.Router()

const controllers = require('../controllers')


router.get('/', controllers.userController.root)

router.get('/all', controllers.userController.all)

router.post('/create', controllers.userController.create)

router.put('/update/:id', controllers.userController.update)

router.get('/find/:id', controllers.userController.find)

router.delete('/remove/:id', controllers.userController.remove)

module.exports = {
    router
}