'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
    [
      {
        "image": "url_jaqueta_1",
        "name": "Jaqueta de Couro Clássica",
        "category_id": 4,
        "description": "Jaqueta de couro para um visual moderno.",
        "price": 89.99,
        "stock": 50
      },
      {
        "image": "url_jaqueta_2",
        "name": "Jaqueta Bomber Estampada",
        "category_id": 4,
        "description": "Jaqueta bomber com estampas variadas.",
        "price": 74.99,
        "stock": 40
      },
      {
        "image": "url_jaqueta_3",
        "name": "Jaqueta Corta-Vento Esportiva",
        "category_id": 4,
        "description": "Jaqueta esportiva para proteção contra o vento.",
        "price": 54.99,
        "stock": 60
      },
      {
        "image": "url_jaqueta_4",
        "name": "Jaqueta Jeans Destroyed",
        "category_id": 4,
        "description": "Jaqueta jeans com efeito destroyed.",
        "price": 64.99,
        "stock": 80
      },
      {
        "image": "url_jaqueta_5",
        "name": "Jaqueta Parka Militar",
        "category_id": 4,
        "description": "Jaqueta parka estilo militar.",
        "price": 79.99,
        "stock": 70
      },
      {
        "image": "url_jaqueta_6",
        "name": "Jaqueta Puffer Acolchoada",
        "category_id": 4,
        "description": "Jaqueta puffer acolchoada para o inverno.",
        "price": 94.99,
        "stock": 90
      },
      {
        "image": "url_jaqueta_7",
        "name": "Jaqueta Corta-Vento Casual",
        "category_id": 4,
        "description": "Jaqueta casual para dias mais frescos.",
        "price": 49.99,
        "stock": 120
      },
      {
        "image": "url_jaqueta_8",
        "name": "Jaqueta de Moletom com Capuz",
        "category_id": 4,
        "description": "Jaqueta de moletom confortável para uso diário.",
        "price": 39.99,
        "stock": 100
      }
    ]
    
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null)
  }
};
