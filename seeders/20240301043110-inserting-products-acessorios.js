'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
    [
      {
        "id": 25,
        "image": "url_acessorio_1",
        "name": "Bolsa de Ombro Fashion",
        "category_id": 6,
        "description": "Acessório de moda para completar o visual.",
        "price": 39.99,
        "stock": 70
      },
      {
        "id": 26,
        "image": "url_acessorio_2",
        "name": "Óculos de Sol Estiloso",
        "category_id": 6,
        "description": "Óculos de sol para proteção e estilo.",
        "price": 29.99,
        "stock": 90
      },
      {
        "id": 27,
        "image": "url_acessorio_3",
        "name": "Chapéu Panamá Clássico",
        "category_id": 6,
        "description": "Chapéu panamá para um toque elegante.",
        "price": 44.99,
        "stock": 60
      },
      {
        "id": 28,
        "image": "url_acessorio_4",
        "name": "Relógio de Pulso Moderno",
        "category_id": 6,
        "description": "Relógio de pulso elegante e moderno.",
        "price": 54.99,
        "stock": 50
      },
      {
        "id": 29,
        "image": "url_acessorio_5",
        "name": "Cinto de Couro Reversível",
        "category_id": 6,
        "description": "Cinto versátil para completar qualquer look.",
        "price": 19.99,
        "stock": 100
      },
      {
        "id": 30,
        "image": "url_acessorio_6",
        "name": "Colar de Prata com Pingente",
        "category_id": 6,
        "description": "Colar elegante para realçar o decote.",
        "price": 34.99,
        "stock": 80
      },
      {
        "id": 31,
        "image": "url_acessorio_7",
        "name": "Bijuteria Brincos Dourados",
        "category_id": 6,
        "description": "Brincos dourados para um toque de sofisticação.",
        "price": 24.99,
        "stock": 120
      },
      {
        "id": 32,
        "image": "url_acessorio_8",
        "name": "Lenço Estampado",
        "category_id": 6,
        "description": "Lenço estampado para complementar o visual.",
        "price": 14.99,
        "stock": 110
      }
    ]
    
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null)
  }
};
