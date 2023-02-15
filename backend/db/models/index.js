const User = require('./users-model')
const Item = require('./items-model')
const Category = require('./categories-model')
const Image_item = require('./image_items-model')
const Image_track = require('./image_tracks-model')
const Track = require('./tracks-model')


Item.belongsTo(User, {
  foreignKey: 'user_id'
})

Item.belongsTo(Category, {
  foreignKey: 'category_id'
})

Image_item.belongsTo(Item, {
  foreignKey: 'item_id'
})

Item.hasMany(Image_item, {
  foreignKey: 'item_id'
})

Track.belongsTo(User, {
  foreignKey: 'user_id'
})

Track.hasMany(Image_track, {
  foreignKey: 'tracks_id'
})

module.exports = {
  User,
  Item,
  Category,
  Image_item,
  Track,
  Image_track
}