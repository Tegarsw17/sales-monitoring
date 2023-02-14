const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/config")

class image_track extends Model {
}

image_track.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }, 
    tracks_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'tracks_id'
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

module.exports = image_track