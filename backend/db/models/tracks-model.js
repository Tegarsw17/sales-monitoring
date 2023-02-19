const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/config")

class track extends Model {
}

track.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }, 
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'user_id'
    },
    track_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lock_latitude: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lock_longitude: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kecamatan: {
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

module.exports = track