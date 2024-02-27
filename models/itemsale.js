'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ItemSale extends Model {
    
    static associate(models) {
      ItemSale.belongsTo(models.User, {
        foreignKey: 'user_id'
      })
      ItemSale.belongsTo(models.Product, {
        foreignKey: 'product_id'
      })
      ItemSale.belongsTo(models.Sale, {
        foreignKey: 'sale_id'
      })
    }
  }
  ItemSale.init({
    saleid: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ItemSale',
    tableName: 'items_sales'
  });
  return ItemSale;
};