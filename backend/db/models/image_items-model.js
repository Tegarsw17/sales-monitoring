const { Model, DataTypes } = require("sequelize")
const sequelize = require("../../config/config.js")

class image extends Model {
}

image.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }, 
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'item_id'
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize: sequelize,
    timestamps: true,
    paranoid: true,
    underscored: true,
    deletedAt: 'deleted_at',
    updatedAt: 'updated_at',
    createdAt: 'created_at',
  },
)

module.exports = image