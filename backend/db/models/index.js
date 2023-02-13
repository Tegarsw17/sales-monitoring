const User = require('./users-model')
const Item = require('./items-model')
const Category = require('./categories-model')
const Image_item = require('./image_items-model')

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

module.exports = {
  User,
  Item,
  Category,
  Image_item
}