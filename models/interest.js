const mongoose = require('mongoose')
const Schema = mongoose.Schema

const interestSchema = new Schema({
  interest: String,  
})

  
const Interest = mongoose.model('interest', interestSchema)

module.exports = Interest