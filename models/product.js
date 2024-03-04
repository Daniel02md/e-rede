'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    
    static associate(models) {
      Product.hasMany(models.ItemSale, {
        foreignKey: 'product_id'
      })
      Product.belongsTo(models.Category, {
        foreignKey: 'category_id',
        as: 'category'
      })
    }
  }
  Product.init({
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: false
    
  });
  return Product;
};