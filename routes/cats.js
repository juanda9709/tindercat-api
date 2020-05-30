var router = require('express').Router()
const authMiddle = require('../middleware/verify-auth')
const { login, signup, catList, liked, unliked, addInterest, removeInterest, updatePreferences } = require('./../controllers/catsController')

router.get('/login', login)
router.post('/signup', signup)
router.get('/', authMiddle, catList)
router.post('/liked', liked )
router.post('/unliked', unliked)
router.post('/interest', addInterest)
router.delete('/interest', removeInterest)
router.put('/preferences', updatePreferences)

module.exports = router //  Para hacerlo público, poder utilizarlo desde otro modulo
