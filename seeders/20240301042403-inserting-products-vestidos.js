'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products',
    [
      {
        "image": "url_vestido_1",
        "name": "Vestido Floral Midi",
        "category_id": 3,
        "description": "Vestido elegante com estampa floral.",
        "price": 69.99,
        "stock": 60
      },
      {
        "image": "url_vestido_2",
        "name": "Vestido de Festa Longo",
        "category_id": 3,
        "description": "Vestido longo para ocasiões especiais.",
        "price": 89.99,
        "stock": 50
      },
      {
        "image": "url_vestido_3",
        "name": "Vestido Tubinho Básico",
        "category_id": 3,
        "description": "Vestido tubinho para looks versáteis.",
        "price": 49.99,
        "stock": 40
      },
      {
        "image": "url_vestido_4",
        "name": "Vestido Jeans Curto",
        "category_id": 3,
        "description": "Vestido jeans curto para um visual descontraído.",
        "price": 39.99,
        "stock": 70
      },
      {
        "image": "url_vestido_5",
        "name": "Vestido Estampado Verão",
        "category_id": 3,
        "description": "Vestido estampado para os dias quentes.",
        "price": 54.99,
        "stock": 80
      },
      {
        "image": "url_vestido_6",
        "name": "Vestido Midi Soltinho",
        "category_id": 3,
        "description": "Vestido midi soltinho para conforto.",
        "price": 44.99,
        "stock": 90
      },
      {
        "image": "url_vestido_7",
        "name": "Vestido Sereia Longo",
        "category_id": 3,
        "description": "Vestido sereia longo para eventos noturnos.",
        "price": 79.99,
        "stock": 120
      },
      {
        "image": "url_vestido_8",
        "name": "Vestido Chemisier Clássico",
        "category_id": 3,
        "description": "Vestido chemisier elegante para várias ocasiões.",
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
