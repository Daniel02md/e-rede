'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('categories', [
      {
        "id": 1,
        "name": "camisetas"
      },
      {
        "id": 2,
        "name": "calcas"
      },
      {
        "id": 3,
        "name": "vestidos"
      },
      {
        "id": 4,
        "name": "jaquetas"
      },
      {
        "id": 5,
        "name": "sapatos"
      },
      {
        "id": 6,
        "name": "acessorios"
      },
      {
        "id": 7,
        "name": "saias"
      },
      {
        "id": 8,
        "name": "roupas esportivas"
      },
      {
        "id": 9,
        "name": "casacos de inverno"
      },
      {
        "id": 10,
        "name": "moda praia"
      },
      {
        "id": 11,
        "name": "roupas infantis"
      },
      {
        "id": 12,
        "name": "Bolsas"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('categories', null)
  }
};
