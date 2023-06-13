'use strict';
const { Model,DataTypes  } = require('sequelize');
const listaJson = require('../../../listArom.json');

module.exports = (sequelize, DataTypes) => {
  class produtoArom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  produtoArom.init({
    id_produtoArom:     {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name_produtoArom: {
      allowNull: false,
      type: DataTypes.STRING
    },
    Preco: {
      allowNull: false,
      type: DataTypes.STRING
    },
    novoPreco: {
      allowNull: false,
      type: DataTypes.STRING
    },
    imageSrc: {
      allowNull: false,
      type: DataTypes.STRING
    },
    imageAlt: {
      allowNull: false,
      type: DataTypes.STRING
    }
    
  }, {
    sequelize,
    modelName: 'produtoArom',
  });


  produtoArom.loadFromJSON = async function(jsonData) {
    try {
      await this.bulkCreate(jsonData);
      console.log('Dados carregados com sucesso.');
    } catch (error) {
      console.error('Erro ao carregar os dados:', error);
    }
  };
// Chamar a função para carregar os dados ao iniciar o modelo
  produtoArom.loadFromJSON(listaJson); 


  return produtoArom;
};