const loginService  = require('../services/cats/login')
const signupService  = require('../services/cats/signup')
const addInterestService = require('../services/cats/add-interest')
const removeInterestService = require('../services/cats/remove-interest')
const updatePreferencesService = require('../services/cats/update-preferences')
const {addLikedService, addMatchesService} = require('../services/cats/add-liked')
const addUnlikedService = require('../services/cats/add-unliked')
const catsListService = require('../services/cats/cats-Lists')
const autoLoginService = require('../services/cats/autologin')
const lovedService = require ('../services/cats/loved')

const login = async (req, res) => {
  const { email, password } = req.query
  const response = await loginService(email, password)
  res.json(response)
}

const signup = async (req, res) => {
  const cat = req.body
  const response = await signupService(cat)
  res.json(response)
  
}

const autoLogin = async (req, res) => {
  const { catId } = req.query
  const response = await autoLoginService(catId)
  res.json(response)
  
}

const catList = async (req, res) => {
  const { catId } = req.query
  const response = await catsListService(catId)
  res.json(response)
}

const liked = async (req, res) => {
  const { catIdLiked } = req.body
  const { catId } = req.query  
  const responses =  addMatchesService(catId, catIdLiked)
  const response = await addLikedService(catId, catIdLiked)
  res.json(response)
}

const unliked = async (req, res) => {
  const {catIdUnliked } = req.body
  const { catId } = req.query
  
  const response = await addUnlikedService(catId, catIdUnliked)
  res.json(response)
}

const addInterest = async (req, res) => {
  const { interestId } = req.body
  const { catId } = req.query
  const response = await addInterestService(catId, interestId)
  res.json(response) 
}

const removeInterest = async (req, res) => {
  const { interestId } = req.body
  const { catId } = req.query
  const response = await removeInterestService(catId, interestId)
  res.json(response)
}

const updatePreferences = async (req, res) => {
  const { preferences } = req.body
  const {catId} = req.query
  const response = await updatePreferencesService(catId, preferences)
  res.json(response)
}

const loved = async (req, res) => {
  const { catId } = req.query
  const response = await lovedService(catId)
  res.json(response)
}






module.exports = {
  login,
  signup,
  catList,
  liked,
  unliked,
  addInterest,
  removeInterest,
  updatePreferences,
  autoLogin,
  loved
}
