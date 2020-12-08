
const signin = require('express').Router()
const jwt = require('jsonwebtoken');
require('dotenv/config');
const db = require('../config/db')
const {
    isString,
    isValidEmail,
} = require('../util/dataHandler')

const cors = require('cors')

signin.use(cors({
    origin: '*'
}))

signin.post('/signin', async (req, res) => {
    const user = { ...req.body }
    
    try {
        isString(user.email, "Wrong email")
        isString(user.password, "Wrong name")
        isValidEmail(user.email, "no valid email")

        const match = await db('users').where({ email: user.email }).first()       

        if (!match)
            return res.send("Email or password incorrect.")

        if (user.password !== match.password)
            return res.send("Email or password incorrect.")


        delete match.password
        delete match.id

        const token = jwt.sign(
            {}, process.env.TOKENKEY,
            {
                subject: toString(match._id),
                expiresIn: process.env.TOKEN_EXPIRES
            });
        return res.send({ ...match, token })
    } catch (err) {
        return res.status(400).json({ error: err.message })
    }
})

module.exports = signin;