'use strict';
const { Model,DataTypes  } = require('sequelize');
const listaJson = require('../../../listProdutos.json');


/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const product = require('../models/product')(queryInterface.sequelize, DataTypes);
    await queryInterface.createTable('products', {
      id_produto: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_produto: {
        type: Sequelize.STRING
      },
      Preco: {
        type: Sequelize.INTEGER
      },
      novoPreco: {
        type: Sequelize.INTEGER
      },
      imageSrc: {
        type: Sequelize.STRING
      },
      imageAlt: {
        type: Sequelize.STRING
      },
      categoria: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    // Carregar os dados do JSON para a tabela
    await product.loadFromJSON(listaJson);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('produtos');
  }
};