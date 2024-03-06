'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        "id": 1,
        "name": "camisetas",
        "image": "camisetas.png"
      },
      {
        "id": 2,
        "name": "calcas",
        "image": "calcas.png"
      },
      {
        "id": 5,
        "name": "sapatos",
        "image": "sapatos.png"
      },
      {
        "id": 6,
        "name": "acessorios",
        "image": "acessorios.png"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null)
  }
};
