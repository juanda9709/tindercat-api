const InterestModel = require('./../../models/interest')

const newInterest = async (interestData) => {
    try {
    const interest = await InterestModel(interestData).save()
    return { status: 1, interest }
} catch(err){
    return { status: 2, msg: 'Error saving new interest'} 
}
}

module.exports = newInterest