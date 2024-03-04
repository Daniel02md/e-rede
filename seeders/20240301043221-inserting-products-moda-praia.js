'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
    [
      {
        "image": "url_praia_1",
        "name": "Biquíni Estampado",
        "category_id": 10,
        "description": "Biquíni estampado para os dias ensolarados.",
        "price": 44.99,
        "stock": 60
      },
      {
        "image": "url_praia_2",
        "name": "Maiô Clássico Preto",
        "category_id": 10,
        "description": "Maiô clássico preto para um visual elegante.",
        "price": 49.99,
        "stock": 70
      },
      {
        "image": "url_praia_3",
        "name": "Saída de Praia Longa",
        "category_id": 10,
        "description": "Saída de praia longa para um toque de glamour.",
        "price": 34.99,
        "stock": 80
      },
      {
        "image": "url_praia_4",
        "name": "Shorts de Praia Estampado",
        "category_id": 10,
        "description": "Shorts de praia estampado para conforto.",
        "price": 24.99,
        "stock": 90
      },
      {
        "image": "url_praia_5",
        "name": "Conjunto Biquíni Cropped",
        "category_id": 10,
        "description": "Conjunto de biquíni cropped para um visual moderno.",
        "price": 54.99,
        "stock": 100
      },
      {
        "image": "url_praia_6",
        "name": "Chapéu de Praia Grande",
        "category_id": 10,
        "description": "Chapéu de praia grande para proteção solar.",
        "price": 29.99,
        "stock": 110
      },
      {
        "image": "url_praia_7",
        "name": "Óculos de Sol Esportivo",
        "category_id": 10,
        "description": "Óculos de sol esportivo para atividades ao ar livre.",
        "price": 39.99,
        "stock": 120
      },
      {
        "image": "url_praia_8",
        "name": "Viseira Transparente",
        "category_id": 10,
        "description": "Viseira transparente para um visual moderno na praia.",
        "price": 19.99,
        "stock": 130
      }
    ]
    
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null)
  }
};
