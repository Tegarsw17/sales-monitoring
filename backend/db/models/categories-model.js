const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/config")

class category extends Model {
}

category.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }, 
        category_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
  },
  {
    sequelize: sequelize,
    timestamps: true,
    paranoid: true,
    underscored: true,
    // deletedAt: 'deleted_at',
    // updatedAt: 'updated_at',
    // createdAt: 'created_at',
  },
)

module.exports = category