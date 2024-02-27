'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(150),
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING(15),
        allowNull: false,
    }
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('users')
  }
};
