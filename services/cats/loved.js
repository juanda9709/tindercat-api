const CatModel = require('../../models/cat')

const loved = async (catId) => {
    try {
        const catLogged = await CatModel.findById(catId)
        const catloved = await CatModel.find({
            _id: { $in: catLogged.cat_matches}
        })
            return { status: 1, catloved}

    } catch(err) {
        return {status: 2, msg: 'Exception finding cat'}
    }
}

module.exports = loved