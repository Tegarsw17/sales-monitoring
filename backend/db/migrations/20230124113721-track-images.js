'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('image_tracks', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }, 
        tracks_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references : {
            model: "tracks",
            key: "id",
            as: "tracks_id"
          }
        },
        url: {
          type: Sequelize.STRING,
          allowNull: false
        },
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Date.now()
        },
        updated_at: {
          type: Sequelize.DATE,
          defaultValue: Date.now()
        },
        deleted_at: {
          type: Sequelize.DATE
        }
      })
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('image_tracks')
  }
}
