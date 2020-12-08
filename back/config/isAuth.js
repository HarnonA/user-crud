const jwt = require('jsonwebtoken');
require('dotenv/config')


function isAuth(req,res,next) {

    const authHeader = req.headers.authorization;
   
    if (!authHeader)
        return res.send({ "error":  "No auth" })

    const [bearer, token] = authHeader.split(' ')
    try {
        
        const decoded = jwt.verify(token, process.env.TOKENKEY)
        return next()
        // return res.send("Login sucess")
    } catch (err) {
        res.send({ "error": "Invalid JWT" })
    }
}

module.exports = isAuth;