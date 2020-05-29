const CatModel = require('../../models/cat')

const addUnlikedService = async (catId, catIdUnliked) => {
  try {
    const cat = await CatModel.findById(catId)
    cat.cat_unlikes.push(catIdUnliked)
    cat.save()
    return { status: 1, cat }
  }catch(err){
    return { status: 2 }
  }
}

module.exports = addUnlikedService