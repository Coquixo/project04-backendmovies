'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class series extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      series.belongsTo(models.articles)
      // series.belongsTo(models.articles, 
      //   {
      //   foreignKey: {
      //     name: 'id_article',
      //     allowNull:false
      //   }
      // })
    }
    
  }
  series.init({
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
    rating: DataTypes.STRING,
    nextsevendays: DataTypes.BOOLEAN,
    theater: DataTypes.BOOLEAN,
    cine: DataTypes.BOOLEAN,
    articleIdArticle: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'articles',
        key: 'id_article'
      }
    }
  }, {
    sequelize,
    modelName: 'series',
    timestamps: false
  });
  return series;
};