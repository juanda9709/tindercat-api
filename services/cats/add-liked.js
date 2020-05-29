const CatModel = require('../../models/cat')

const addLikedService = async (catId, catIdLiked) => {
  try {
    const cat = await CatModel.findById(catId)
    cat.cat_likes.push(catIdLiked)
    cat.save()
    return { status: 1, cat }
  }catch(err){
    return { status: 2 }
  }
}

module.exports = addLikedService