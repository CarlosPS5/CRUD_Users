const userModel = require('../models')

const root = (req,res) => {
    res.send('Root path')
}

const all = async (req,res) => {
    const users = await userModel.find()

    const response = {
        status: "success",
        data: {
            users: [users]
        },
        code: 200
    }

    res.send(response)
}

const create = (req,res) => {
    const user = new userModel({
        name: req.body.name,
        description: req.body.description,
        age: req.body.age
    })

    user.save()

    const response = {
        status: "success",
        data: user,
        code: 200
    }
    res.send(response)
}

const update = async (req,res) => {
    const user = await userModel.findById({_id: req.params.id})
    user.name = req.body.name
    user.description = req.body.description
    user.age = req.body.age
    user.save()

    const response = {
        status: "success",
        data: user,
        code: 200
    }

    res.send(response)
}

const find = async (req,res) => {
    const user = await userModel.findById({_id: req.params.id})
    const response = {
        status: "success",
        data: user,
        code: 200
    }
    res.send(response)
}

const remove = async (req,res) => {
    const user = await userModel.findByIdAndDelete({_id: req.params.id})
    const response = {
        status: "success",
        data: user,
        code: 200
    }
    res.send(response)
}

module.exports = {
    root,
    all,
    create,
    update,
    find,
    remove

}