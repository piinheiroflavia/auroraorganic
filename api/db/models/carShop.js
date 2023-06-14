'use strict';
const { Model, DataTypes } = require('sequelize');
const db = require('../config/database');
const Cliente = require('./cliente');
const Produto = require('./product');

module.exports = (sequelize) => {
  class carShop extends Model {
    static associate(models) {
      // Associação com a tabela "clientes"
      carShop.belongsTo(models.Cliente, { foreignKey: 'id_cliente' });

      // Associação com a tabela "produtos"
      carShop.belongsTo(models.Produto, { foreignKey: 'id_produto' });
    }
  }
  carShop.init(
    {
      id_carrinho: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_cliente: {
        type: DataTypes.INTEGER,
        references: {
          model: 'clientes',
          key: 'id_cliente'
        }
      },
      id_produto: {
        type: DataTypes.INTEGER,
        references: {
          model: 'produtos',
          key: 'id_produto'
        }
      },
      quantidade: {
        type: DataTypes.INTEGER
      },
      valor_total: {
        type: DataTypes.INTEGER
      }
    },
    {
      sequelize,
      modelName: 'carShop',
      tableName: 'carrinho',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  );

  return carShop;
};






