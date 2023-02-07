'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('orders', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }, 
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references : {
            model: "users",
            key: "id",
            as: "user_id"
          }
        },
        cart_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references : {
            model: "carts",
            key: "id",
            as: "cart_id"
          }
        },
        total_price: {
          type: Sequelize.DOUBLE,
          allowNull: false,
        },
        status_order: {
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
      await queryInterface.dropTable('orders')
  }
}
