"use strict";
const { Model, INTEGER, STRING } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // movies.belongsTo(models.articles)
      movies.belongsTo(models.articles);
    }
  }
  movies.init(
    {
      id_movie: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      genre: DataTypes.STRING,
      image: DataTypes.STRING,
      synopsis: DataTypes.STRING,
      rating: DataTypes.STRING,
      year: DataTypes.STRING,
      ArticleIdArticle: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "articles",
          key: "id_article",
        },
      },
    },
    {
      sequelize,
      modelName: "movies",
      timestamps: false,
    }
  );
  return movies;
};
