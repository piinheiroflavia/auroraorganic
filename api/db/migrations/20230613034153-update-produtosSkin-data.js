'use strict';
const listaJson = require('../../../listSkin.json');
const produtosSkin = require('../models/produtosSkin');

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('produtosSkin', listaJson);
      console.log('Dados carregados com sucesso.');
    } catch (error) {
      console.error('Erro ao carregar os dados:', error);
    }
  },

  async down(queryInterface, Sequelize) {
    // Adicione o código de remoção dos dados, se necessário
  }
};
