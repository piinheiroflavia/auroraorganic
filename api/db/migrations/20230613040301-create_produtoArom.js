'use strict';
var DataTypes = require('sequelize/lib/data-types');
/** @type {import('sequelize-cli').Migration} */

const listaJson = require('../../../listArom.json');
const produtoArom = require('../models/produtoArom');

produtoArom.loadFromJSON(listaJson);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produtoArom', {
      id_produtoArom: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_produtoArom: {
        type: Sequelize.STRING
      },
      Preco: {
        type: Sequelize.STRING
      },
      novoPreco: {
        type: Sequelize.STRING
      },
      imageSrc: {
        type: Sequelize.STRING
      },
      imageAlt: {
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
  },

  
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('produtoArom');
  }
};
