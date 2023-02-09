'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('categories', [
      {
        category_name: 'mie instan'
      },
      {
        category_name: 'bumbu dapur'
      },
      {
        category_name: 'tisu'
      },
      {
        category_name: 'sabun'
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('categories', null, {})
  }
}

