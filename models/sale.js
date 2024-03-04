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
    date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Sale',
    tableName: 'sales',
    timestamps: false
  });
  return Sale;
};