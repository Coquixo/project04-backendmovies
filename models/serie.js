'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class serie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.article, {
        foreignKey:'id_article'
      })
    }
  }
  serie.init({
    id_serie: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    image: DataTypes.STRING,
    synopsis: DataTypes.STRING,
    punctuation: DataTypes.STRING,
    nextsevendays: DataTypes.BOOLEAN,
    theater: DataTypes.BOOLEAN,
    cine: DataTypes.BOOLEAN,
    id_article: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'serie',
  });
  return serie;
};