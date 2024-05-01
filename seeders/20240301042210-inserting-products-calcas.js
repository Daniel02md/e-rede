'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', 
    [
      {
        "id": 9,
        "image": "url_calca_1",
        "name": "Calça Jeans Slim Fit",
        "category_id": 2,
        "description": "Calça jeans moderna e ajustada.",
        "price": 49.99,
        "stock": 80
      },
      {
        "id": 10,
        "image": "url_calca_2",
        "name": "Calça Chino Clássica",
        "category_id": 2,
        "description": "Calça chino elegante para diversas ocasiões.",
        "price": 39.99,
        "stock": 70
      },
      {
        "id": 11,
        "image": "url_calca_3",
        "name": "Calça Jogger Sarja",
        "category_id": 2,
        "description": "Calça jogger em sarja para um visual descontraído.",
        "price": 34.99,
        "stock": 90
      },
      {
        "id": 12,
        "image": "url_calca_4",
        "name": "Calça Social Slim",
        "category_id": 2,
        "description": "Calça social ajustada para eventos formais.",
        "price": 59.99,
        "stock": 60
      },
      {
        "id": 13,
        "image": "url_calca_5",
        "name": "Calça Cargo Outdoor",
        "category_id": 2,
        "description": "Calça cargo resistente para atividades ao ar livre.",
        "price": 44.99,
        "stock": 50
      },
      {
        "id": 14,
        "image": "url_calca_6",
        "name": "Calça Legging Fitness",
        "category_id": 2,
        "description": "Calça legging para atividades físicas.",
        "price": 29.99,
        "stock": 40
      },
      {
        "id": 15,
        "image": "url_calca_7",
        "name": "Calça Linho Verão",
        "category_id": 2,
        "description": "Calça de linho leve para dias quentes.",
        "price": 36.99,
        "stock": 120
      },
      {
        "id": 16,
        "image": "url_calca_8",
        "name": "Calça Moletom Jogger",
        "category_id": 2,
        "description": "Calça moletom jogger para conforto casual.",
        "price": 24.99,
        "stock": 100
      }
    ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null)
  }
};
