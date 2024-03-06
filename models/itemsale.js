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
        foreignKey: 'product_id',
        as: 'product'
      })
      ItemSale.belongsTo(models.Sale, {
        foreignKey: 'sale_id',
        as: 'sale'
      })
    }
  }
  ItemSale.init({
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    sale_id: DataTypes.INTEGER
    
  }, {
    sequelize,
    modelName: 'ItemSale',
    tableName: 'items_sales',
    timestamps: false
  });
  return ItemSale;
};