const InterestModel = require('../../models/interest')

const getInterests = async () => {
  const interests = await InterestModel.find()
  return { interests: interests } 
}

module.exports = getInterests