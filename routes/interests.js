var router = require('express').Router()
const { add, getAll } = require('./../controllers/interestsController')
const authMiddle = require('../middleware/verify-auth')

router.post('/', add)
router.get('/', authMiddle, getAll)

module.exports = router

