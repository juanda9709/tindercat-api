const CatModel = require('../../models/cat')

const updatePreferencesService = async (catId, preferences) => {
  try {
    const update = { $set: { preferences: preferences } }
    await CatModel.findByIdAndUpdate(catId, update)
    return { status: 1, preferences }
  } catch (err) {
    return { status: 2, msg: 'Preferences not updated' }
  }
}

module.exports = updatePreferencesService