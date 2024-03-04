'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
    [
      {
        "image": "url_casaco_1",
        "name": "Casaco de Inverno Acolchoado",
        "category_id": 9,
        "description": "Casaco quente para dias frios.",
        "price": 99.99,
        "stock": 30
      },
      {
        "image": "url_casaco_2",
        "name": "Parka Longa com Capuz",
        "category_id": 9,
        "description": "Parka longa com capuz para máxima proteção.",
        "price": 119.99,
        "stock": 40
      },
      {
        "image": "url_casaco_3",
        "name": "Jaqueta Corta-Vento Inverno",
        "category_id": 9,
        "description": "Jaqueta corta-vento ideal para o inverno.",
        "price": 79.99,
        "stock": 50
      },
      {
        "image": "url_casaco_4",
        "name": "Sobretudo Elegante",
        "category_id": 9,
        "description": "Sobretudo elegante para ocasiões especiais.",
        "price": 139.99,
        "stock": 60
      },
      {
        "image": "url_casaco_5",
        "name": "Cardigan Tricot Inverno",
        "category_id": 9,
        "description": "Cardigan de tricot para um toque de sofisticação.",
        "price": 69.99,
        "stock": 70
      },
      {
        "image": "url_casaco_6",
        "name": "Jaqueta Bomber Acolchoada",
        "category_id": 9,
        "description": "Jaqueta bomber acolchoada para estilo e conforto.",
        "price": 89.99,
        "stock": 80
      },
      {
        "image": "url_casaco_7",
        "name": "Casaco de Lã Longo",
        "category_id": 9,
        "description": "Casaco de lã longo para aquecer nos dias mais frios.",
        "price": 109.99,
        "stock": 90
      },
      {
        "image": "url_casaco_8",
        "name": "Puffer Jacket Curto",
        "category_id": 9,
        "description": "Puffer jacket curto para um estilo contemporâneo.",
        "price": 94.99,
        "stock": 100
      }
    ]
    
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null)
  }
};
