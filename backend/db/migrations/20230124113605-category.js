'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('categories', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }, 
        category_name: {
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
      await queryInterface.dropTable('categories')
  }
}
