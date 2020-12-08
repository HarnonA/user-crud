const user = require('express').Router()
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');

const db = require('../config/db')
const isAuth = require('../config/isAuth')
const {
    isString,
    isValidEmail,
    isValidPassword,
    matchPassword
} = require('../util/dataHandler')
const cors = require('cors')

// user.use(isAuth)

user.get('/user/list', isAuth, async (req, res) => {
    try {
        let filterUser = await db('users').select('*')
        filterUser.forEach(e => delete e.password);
        res.status(200).send(filterUser)
    } catch (err) {
        return res.status(400).send(err)
    }
})

user.post('/user/insert', async (req, res) => {
    let user = { ...req.body }
    try {
        isString(user.email, "Wrong email")
        isString(user.name, "Wrong name")
        isString(user.password, "Wrong password")
        isString(user.repeatPassword, "Wrong password")

        isValidEmail(user.email, "no valid email")

        isValidPassword(user.password, "no password")
        isValidPassword(user.repeatPassword, "no password")

        matchPassword(user.password, user.repeatPassword, "Password don't match")

        delete user.repeatPassword

        if (user.id) {
            await db('users')
                .update(user)
                .where({ id: user.id })
                .then(res.send("Success update"))
                .catch(res.status(500).send())
        }
        else {
            user = {...user, id: uuidv4()}
            await db('users').insert(user)
                .then(res.send(user))
        }

    } catch (err) {
        res.status(400).send({ error: err })
    }
})


user.post('/user/search',isAuth, async (req, res) => {
    let id = req.body.id
    try {
        isString(id, "Wrong id")

        let filterUser = await db('users').where({ id: id }).select('*').first()
        delete filterUser.password
        res.status(200).send(filterUser)
    } catch (err) {
        return res.status(400).send(err)
    }
})

user.post('/user/update', async (req, res) => {
    let user = { ...req.body }
    try {

        isString(user.email, "Wrong email")
        isString(user.name, "Wrong name")
        isString(user.password, "Wrong password")

        isValidEmail(user.email, "no valid email")

        if (user.repeatPassword) {
            isString(user.repeatPassword, "Wrong password")
            isValidPassword(user.password, "no password")
            isValidPassword(user.repeatPassword, "no password")
            matchPassword(user.password, user.repeatPassword, "Password don't match")
            delete user.repeatPassword
        }

        await db('users')
            .update(user)
            .where({ id: user.id })
            .then(res.send("Success update"))
            .catch(res.status(500).send())
    } catch (err) {
        return res.status(400).send(err)
    }
})


user.post('/user/delete', isAuth, async (req, res) => {
    let id = req.body.id
    try {
        isString(id, "Wrong id")
        await db('users')
            .where({ id: req.body.id })
            .delete()
            .then(res.status(204).send("Success deleted"))
            .catch(res.status(500).send())
    } catch (err) {
        return res.status(400).send(err)
    }

})


module.exports = user;