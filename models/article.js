'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // One to one
      this.hasOne(models.movie)
      this.hasOne(models.serie)
      //Relacion entre article y articleOrder
      this.belongsToMany(models.articleOrder)
      
    }
  }
  article.init({
    id_article: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'article',
  });
  return article;
};