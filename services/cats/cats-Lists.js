const CatModel = require('../../models/cat')

const catsListService = async (catId) => {
    try {
        const cat = await CatModel.findById(catId)
        const gender = cat.preferences.gender
        const maxAge = cat.preferences.age_max
        const minAge = cat.preferences.age_min
        const excludeCats = [cat.id, cat.cat_likes, cat.cat_unlikes]

        const todayDate = new Date()
     
        const minDate = new Date(todayDate.setFullYear(todayDate.getFullYear() - minAge))
        const maxDate = new Date(todayDate.setFullYear(todayDate.getFullYear() - maxAge))
        
        const avaibleCats = await CatModel.find({
            gender: gender,
            birthday: {$gte: maxDate, $lte: minDate},
            interests: { $in: cat.interests},
            _id: { $nin: excludeCats}
    
        })
          /*
         const avaibleCats = await CatModel.find({
          gender: gender,
           
      })*/
      
      return { status: 1, avaibleCats }
    }catch(err){
      return { status: 2 }
    }
  }
  
  module.exports = catsListService