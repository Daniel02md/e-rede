'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        "image": "url_da_imagem_1",
        "name": "Produto 1",
        "category_id": 1,
        "description": "Descrição do Produto 1",
        "price": 19.99,
        "stock": 100
      },
      {
        "image": "url_da_imagem_2",
        "name": "Produto 2",
        "category_id": 2,
        "description": "Descrição do Produto 2",
        "price": 29.99,
        "stock": 50
      },
      {
        "image": "url_da_imagem_3",
        "name": "Produto 3",
        "category_id": 1,
        "description": "Descrição do Produto 3",
        "price": 39.99,
        "stock": 75
      },
      {
        "image": "url_da_imagem_4",
        "name": "Produto 4",
        "category_id": 2,
        "description": "Descrição do Produto 4",
        "price": 49.99,
        "stock": 120
      },
      {
        "image": "url_da_imagem_5",
        "name": "Produto 5",
        "category_id": 1,
        "description": "Descrição do Produto 5",
        "price": 59.99,
        "stock": 90
      },
      {
        "image": "url_da_imagem_6",
        "name": "Produto 6",
        "category_id": 2,
        "description": "Descrição do Produto 6",
        "price": 69.99,
        "stock": 60
      },
      {
        "image": "url_da_imagem_7",
        "name": "Produto 7",
        "category_id": 1,
        "description": "Descrição do Produto 7",
        "price": 79.99,
        "stock": 110
      },
      {
        "image": "url_da_imagem_8",
        "name": "Produto 8",
        "category_id": 2,
        "description": "Descrição do Produto 8",
        "price": 89.99,
        "stock": 80
      },
      {
        "image": "url_da_imagem_9",
        "name": "Produto 9",
        "category_id": 1,
        "description": "Descrição do Produto 9",
        "price": 99.99,
        "stock": 70
      },
      {
        "image": "url_da_imagem_10",
        "name": "Produto 10",
        "category_id": 2,
        "description": "Descrição do Produto 10",
        "price": 109.99,
        "stock": 95
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null)
  }
};
