'use strict';
var DataTypes = require('sequelize/lib/data-types');
/** @type {import('sequelize-cli').Migration} */

const listaJson = require('../../../listSkin.json');
// Chame o método loadFromJSON para carregar os dados no banco
//const produtosSkin = require('../caminho/do/modelo/produtosSkin');
produtosSkin.loadFromJSON(listaJson);

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('produtosSkin', {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name_produtoSkin: {
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
    await queryInterface.dropTable('produtosSkin');
  }
};
