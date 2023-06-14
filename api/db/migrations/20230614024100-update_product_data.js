'use strict';
const listaJson = require('../../../listProdutos.json');
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Carregar os dados do JSON na tabela
    await queryInterface.bulkInsert('produtos', listaJson, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remover os dados inseridos na migração
    await queryInterface.bulkDelete('produtos', null, {});
  }
};

