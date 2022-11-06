'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class articles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      articles.hasOne(models.movies)
      articles.hasOne(models.series)
      articles.hasOne(models.orders)
      
    }
  }
  articles.init({
    id_article: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'articles',
    timestamps: false
  });
  return articles;
};