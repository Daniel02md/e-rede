'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
    [
      {
        "image": "url_infantil_1",
        "name": "Conjunto Infantil Estampado",
        "category_id": 11,
        "description": "Conjunto infantil estampado para crianças cheias de estilo.",
        "price": 29.99,
        "stock": 80
      },
      {
        "image": "url_infantil_2",
        "name": "Vestido de Festa Infantil",
        "category_id": 11,
        "description": "Vestido de festa infantil para ocasiões especiais.",
        "price": 34.99,
        "stock": 90
      },
      {
        "image": "url_infantil_3",
        "name": "Camiseta Divertida para Crianças",
        "category_id": 11,
        "description": "Camiseta divertida para crianças cheias de energia.",
        "price": 19.99,
        "stock": 100
      },
      {
        "image": "url_infantil_4",
        "name": "Calça Jeans Infantil",
        "category_id": 11,
        "description": "Calça jeans infantil para um visual descolado.",
        "price": 44.99,
        "stock": 110
      },
      {
        "image": "url_infantil_5",
        "name": "Shorts Colorido para Crianças",
        "category_id": 11,
        "description": "Shorts colorido para dias de diversão.",
        "price": 39.99,
        "stock": 120
      },
      {
        "image": "url_infantil_6",
        "name": "Jaqueta Infantil com Capuz",
        "category_id": 11,
        "description": "Jaqueta infantil com capuz para proteção e estilo.",
        "price": 24.99,
        "stock": 130
      },
      {
        "image": "url_infantil_7",
        "name": "Macacão Fofo para Bebês",
        "category_id": 11,
        "description": "Macacão fofo para bebês confortáveis.",
        "price": 49.99,
        "stock": 140
      },
      {
        "image": "url_infantil_8",
        "name": "Sapatinhos de Bebê",
        "category_id": 11,
        "description": "Sapatinhos adoráveis para os pezinhos dos pequenos.",
        "price": 19.99,
        "stock": 150
      }
    ]
    
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('products', null)
  }
};
