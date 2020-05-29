const mongoose = require('mongoose')
const Schema = mongoose.Schema

const interactionSchema = new Schema({
  cat_id: String,
  cat_likes: [String],
  cat_unlikes: [String],
  cat_matches: [String]

})

  
const interactions = mongoose.model('interactions', interactionSchema)

module.exports = interactions