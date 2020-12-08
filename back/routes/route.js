const routes = require('express').Router()
require('cors')


const signin = require('./signin')
const user = require('./user')



routes.use(signin)
routes.use(user)



routes.get('/', function (req, res) {
    res.send("Uhuu, tá funcionando.")
  })


module.exports = routes;