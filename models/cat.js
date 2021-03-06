const mongoose = require('mongoose')
const Schema = mongoose.Schema

const catSchema = new Schema({
  name: String,
  bio: String,
  email: String,
  nick: String,
  gender: String,
  password: String,
  birthday: Date,
  image: String,
  preferences: {
    gender: String,
    age_min: Number,
    age_max: Number
  },
  interests: [String],
  cat_likes: [String],
  cat_unlikes: [String],
  cat_matches: [String]
})

const cat = mongoose.model('cats', catSchema)

module.exports = cat
