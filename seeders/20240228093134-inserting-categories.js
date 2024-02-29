'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {name: 'tenis'},
      {name: 'accessories'},
      {name: 'sport'}
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null)
  }
};
