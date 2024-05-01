'use strict';
const productModel = require("../models").Product
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const products = await productModel.findAll()
    
    for (let product of products){
      product.image = `/media/${product.id}/image.jpg` 
      await product.save()
    }
  },

  async down (queryInterface, Sequelize) {
    const products = await productModel.findAll()
    for (let product of products){
      product.image = `null_image.jpg`
      await product.save()
    }
  }
};
