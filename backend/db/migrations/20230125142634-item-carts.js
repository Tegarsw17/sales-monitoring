'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('item_carts', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        }, 
        item_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references : {
            model: "items",
            key: "id",
            as: "item_id"
          }
        },
        cart_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references : {
            model: "carts",
            key: "id",
            as: "cart_id"
          }
        },
        quantity_order: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        total_price: {
          type: Sequelize.DOUBLE,
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
      await queryInterface.dropTable('item_carts')
  }
};
