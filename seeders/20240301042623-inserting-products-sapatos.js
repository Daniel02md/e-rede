'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
    [
      {
        "image": "url_sapato_1",
        "name": "Sapato Social de Couro",
        "category_id": 5,
        "description": "Sapato social elegante para ocasiões especiais.",
        "price": 79.99,
        "stock": 40
      },
      {
        "image": "url_sapato_2",
        "name": "Tênis Esportivo Leve",
        "category_id": 5,
        "description": "Tênis esportivo leve para atividades físicas.",
        "price": 54.99,
        "stock": 30
      },
      {
        "image": "url_sapato_3",
        "name": "Bota de Couro com Cadarço",
        "category_id": 5,
        "description": "Bota de couro para um visual robusto.",
        "price": 89.99,
        "stock": 50
      },
      {
        "image": "url_sapato_4",
        "name": "Sapatilha Elegante",
        "category_id": 5,
        "description": "Sapatilha elegante para eventos sociais.",
        "price": 49.99,
        "stock": 60
      },
      {
        "image": "url_sapato_5",
        "name": "Chinelo Slide Confortável",
        "category_id": 5,
        "description": "Chinelo slide para conforto casual.",
        "price": 29.99,
        "stock": 70
      },
      {
        "image": "url_sapato_6",
        "name": "Sandália Plataforma Verão",
        "category_id": 5,
        "description": "Sandália plataforma para os dias quentes.",
        "price": 39.99,
        "stock": 80
      },
      {
        "image": "url_sapato_7",
        "name": "Mocassim Casual",
        "category_id": 5,
        "description": "Mocassim casual para um visual descontraído.",
        "price": 44.99,
        "stock": 90
      },
      {
        "image": "url_sapato_8",
        "name": "Alpargata Estampada",
        "category_id": 5,
        "description": "Alpargata estampada para um toque de estilo.",
        "price": 34.99,
        "stock": 100
      }
    ]    
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null)
  }
};
