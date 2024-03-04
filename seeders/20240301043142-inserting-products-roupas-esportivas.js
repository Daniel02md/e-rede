'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
    [
      {
        "image": "url_esportivo_1",
        "name": "Conjunto Esportivo DryFit",
        "category_id": 8,
        "description": "Roupas esportivas para treinos confortáveis.",
        "price": 54.99,
        "stock": 120
      },
      {
        "image": "url_esportivo_2",
        "name": "Legging Fitness Estampada",
        "category_id": 8,
        "description": "Legging fitness com estampa vibrante.",
        "price": 29.99,
        "stock": 100
      },
      {
        "image": "url_esportivo_3",
        "name": "Regata Esportiva DryFit",
        "category_id": 8,
        "description": "Regata esportiva para treinos intensos.",
        "price": 19.99,
        "stock": 80
      },
      {
        "image": "url_esportivo_4",
        "name": "Shorts de Corrida Leve",
        "category_id": 8,
        "description": "Shorts de corrida leve para alto desempenho.",
        "price": 24.99,
        "stock": 60
      },
      {
        "image": "url_esportivo_5",
        "name": "Jaqueta Corta-Vento Esportiva",
        "category_id": 8,
        "description": "Jaqueta esportiva para proteção contra o vento.",
        "price": 54.99,
        "stock": 40
      },
      {
        "image": "url_esportivo_6",
        "name": "Top Esportivo Alto Suporte",
        "category_id": 8,
        "description": "Top esportivo de alto suporte para atividades intensas.",
        "price": 34.99,
        "stock": 70
      },
      {
        "image": "url_esportivo_7",
        "name": "Camiseta Manga Longa Térmica",
        "category_id": 8,
        "description": "Camiseta manga longa térmica para dias frios.",
        "price": 44.99,
        "stock": 90
      },
      {
        "image": "url_esportivo_8",
        "name": "Tênis de Corrida Amortecido",
        "category_id": 8,
        "description": "Tênis de corrida com amortecimento para conforto.",
        "price": 89.99,
        "stock": 50
      }
    ]
    
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null)
  }
};
