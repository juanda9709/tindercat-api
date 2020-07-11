var router = require('express').Router()
const authMiddle = require('../middleware/verify-auth')
const { login, signup, catList, liked, unliked, addInterest, removeInterest, updatePreferences, autoLogin, loved } = require('./../controllers/catsController')

router.get('/login', login)
router.post('/signup', signup)
router.post('/autoLogin', authMiddle, autoLogin)
router.get('/', authMiddle, catList)
router.post('/liked', authMiddle, liked )
router.post('/unliked', authMiddle, unliked)
router.post('/interest', authMiddle, addInterest)
router.delete('/interest', authMiddle,removeInterest)
router.put('/preferences', authMiddle, updatePreferences)
router.get ('/loved', authMiddle, loved)

module.exports = router //  Para hacerlo público, poder utilizarlo desde otro modulo
 