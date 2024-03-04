'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
    [
      {
        "image": "url_bolsa_1",
        "name": "Bolsa Tote Grande",
        "category_id": 12,
        "description": "Bolsa tote grande para o dia a dia.",
        "price": 64.99,
        "stock": 90
      },
      {
        "image": "url_bolsa_2",
        "name": "Clutch de Couro",
        "category_id": 12,
        "description": "Clutch de couro para eventos noturnos.",
        "price": 44.99,
        "stock": 100
      },
      {
        "image": "url_bolsa_3",
        "name": "Mochila Casual",
        "category_id": 12,
        "description": "Mochila casual para um estilo descontraído.",
        "price": 54.99,
        "stock": 80
      },
      {
        "image": "url_bolsa_4",
        "name": "Bolsa Transversal Pequena",
        "category_id": 12,
        "description": "Bolsa transversal pequena para praticidade.",
        "price": 34.99,
        "stock": 70
      },
      {
        "image": "url_bolsa_5",
        "name": "Bolsa de Ombro Elegante",
        "category_id": 12,
        "description": "Bolsa de ombro elegante para diversas ocasiões.",
        "price": 74.99,
        "stock": 60
      },
      {
        "image": "url_bolsa_6",
        "name": "Bolsa Satchel Moderna",
        "category_id": 12,
        "description": "Bolsa satchel moderna para um toque contemporâneo.",
        "price": 84.99,
        "stock": 50
      },
      {
        "image": "url_bolsa_7",
        "name": "Bolsa Crossbody Estampada",
        "category_id": 12,
        "description": "Bolsa crossbody com estampa vibrante.",
        "price": 49.99,
        "stock": 120
      },
      {
        "image": "url_bolsa_8",
        "name": "Bolsa de Viagem Resistente",
        "category_id": 12,
        "description": "Bolsa de viagem resistente para aventuras.",
        "price": 94.99,
        "stock": 110
      }
    ]
    
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null)
  }
};
