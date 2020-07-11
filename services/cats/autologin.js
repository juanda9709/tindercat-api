const CatModel = require('../../models/cat')

const autologin = async (catId) => {
    try {
        const catLogged = await CatModel.findById(catId)
        if(catLogged){
            return { status: 1, cat: catLogged}
        }
        return { status: 2, msg: 'Cat not found - 404'}
    } catch(err) {
        return {status: 2, msg: 'Exception finding cat'}
    }
}

module.exports = autologin