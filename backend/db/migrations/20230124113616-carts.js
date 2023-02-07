'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('carts', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }, 
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          model: "users",
          key: "id",
          as: "user_id"
        },
        status_cart: {
          type: Sequelize.STRING,
          allowNull: false,
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
      await queryInterface.dropTable('carts')
  }
};
