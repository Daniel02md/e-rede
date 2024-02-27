'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {

    static associate(models) {
      Sale.hasMany(models.ItemSale, {
        foreignKey: 'sale_id'
      })
    }
  }
  Sale.init({
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Sale',
    tableName: 'sales'
  });
  return Sale;
};