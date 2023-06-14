'use strict';
const { Model,DataTypes  } = require('sequelize');
const listaJson = require('../../../listSkin.json');

module.exports = (sequelize, DataTypes) => {
  class produtosSkin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  produtosSkin.init({
    id_produto: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name_produto: {
      allowNull: false,
      type: DataTypes.STRING
    },
    Preco: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    novoPreco: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    imageSrc: {
      allowNull: false,
      type: DataTypes.STRING
    },
    imageAlt: {
      allowNull: false,
      type: DataTypes.STRING
    },
    categoria: {
      allowNull: false,
      type: DataTypes.STRING
    }
    
  }, {
    sequelize,
    modelName: 'produtosSkin',
  });


  produtosSkin.loadFromJSON = async function(jsonData) {
    try {
      await this.bulkCreate(jsonData);
      console.log('Dados carregados com sucesso.');
    } catch (error) {
      console.error('Erro ao carregar os dados:', error);
    }
  };
// Chamar a função para carregar os dados ao iniciar o modelo
  produtosSkin.loadFromJSON(listaJson); 


  return produtosSkin;
};