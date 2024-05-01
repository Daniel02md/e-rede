'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert( 'products',
      [
        {
          "id": 1,
          "image": "url_camiseta_1",
          "name": "Camiseta Casual Algodão",
          "category_id": 1,
          "description": "Camiseta confortável para uso diário.",
          "price": 29.99,
          "stock": 100
        },
        {
          "id": 2,
          "image": "url_camiseta_2",
          "name": "Camiseta Estampada Vintage",
          "category_id": 1,
          "description": "Camiseta com design retrô e estampas variadas.",
          "price": 24.99,
          "stock": 80
        },
        {
          "id": 3,
          "image": "url_camiseta_3",
          "name": "Camiseta Manga Longa Listrada",
          "category_id": 1,
          "description": "Camiseta de manga longa com listras modernas.",
          "price": 34.99,
          "stock": 60
        },
        {
          "id": 4,
          "image": "url_camiseta_4",
          "name": "Regata Esportiva DryFit",
          "category_id": 1,
          "description": "Regata esportiva para treinos intensos.",
          "price": 19.99,
          "stock": 50
        },
        {
          "id": 5,
          "image": "url_camiseta_5",
          "name": "Camiseta Polo Clássica",
          "category_id": 1,
          "description": "Camiseta polo elegante para diversas ocasiões.",
          "price": 39.99,
          "stock": 40
        },
        {
          "id": 6,
          "image": "url_camiseta_6",
          "name": "Camiseta Estampada Arte Urbana",
          "category_id": 1,
          "description": "Camiseta com estampas artísticas urbanas.",
          "price": 27.99,
          "stock": 70
        },
        {
          "id": 7,
          "image": "url_camiseta_7",
          "name": "Camiseta Manga Raglan",
          "category_id": 1,
          "description": "Camiseta com mangas raglan para um visual diferenciado.",
          "price": 31.99,
          "stock": 90
        },
        {
          "id": 8,
          "image": "url_camiseta_8",
          "name": "Camiseta Básica Algodão Orgânico",
          "category_id": 1,
          "description": "Camiseta básica feita de algodão orgânico.",
          "price": 26.99,
          "stock": 120
        }
      ]
      
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null)
  }
};
