const User = require('./users-model')
const Item = require('./items-model')

Item.belongsTo(User, {
  foreignKey: 'user_id'
})

module.exports = {
  User,
  Item,
}