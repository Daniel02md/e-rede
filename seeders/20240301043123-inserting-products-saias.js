'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
    [
      {
        "image": "url_saia_1",
        "name": "Saia Plissada Midi",
        "category_id": 7,
        "description": "Saia elegante para diversas ocasiões.",
        "price": 34.99,
        "stock": 90
      },
      {
        "image": "url_saia_2",
        "name": "Saia Lápis Social",
        "category_id": 7,
        "description": "Saia lápis social para um look profissional.",
        "price": 39.99,
        "stock": 80
      },
      {
        "image": "url_saia_3",
        "name": "Saia Jeans Destroyed",
        "category_id": 7,
        "description": "Saia jeans com efeito destroyed para um visual moderno.",
        "price": 29.99,
        "stock": 70
      },
      {
        "image": "url_saia_4",
        "name": "Saia Plissada Longa",
        "category_id": 7,
        "description": "Saia plissada longa para um look sofisticado.",
        "price": 44.99,
        "stock": 60
      },
      {
        "image": "url_saia_5",
        "name": "Saia Midi Estampada",
        "category_id": 7,
        "description": "Saia midi com estampa vibrante.",
        "price": 54.99,
        "stock": 50
      },
      {
        "image": "url_saia_6",
        "name": "Saia Envelope Casual",
        "category_id": 7,
        "description": "Saia envelope para um visual descontraído.",
        "price": 24.99,
        "stock": 40
      },
      {
        "image": "url_saia_7",
        "name": "Saia Godê Floral",
        "category_id": 7,
        "description": "Saia godê com estampa floral.",
        "price": 39.99,
        "stock": 120
      },
      {
        "image": "url_saia_8",
        "name": "Saia Plissada Metálica",
        "category_id": 7,
        "description": "Saia plissada metálica para um toque glamouroso.",
        "price": 64.99,
        "stock": 100
      }
    ]
    
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null)
  }
};
