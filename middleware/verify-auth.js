const jwt = require('jsonwebtoken')
const { SECRET } = require('../config/constants')

const verifyAuth = (req, res, next) => {
   
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        const token = req.headers.authorization.split(' ')[1]
       
        try {
            const decoded = jwt.verify( token, SECRET )
           
            req.query.catId = decoded.catId

        } catch(err) {
            res.status(401).json({ error: 'Not authorized'})

        }
    } else {
        res.status(400).json({ error: 'Token is required'})
    }
    next()

}

module.exports = verifyAuth