const User = require('./users-model')
const Item = require('./items-model')
const Category = require('./categories-model')

Item.belongsTo(User, {
  foreignKey: 'user_id'
})

Item.belongsTo(Category, {
  foreignKey: 'category_id'
})

module.exports = {
  User,
  Item,
  Category
}