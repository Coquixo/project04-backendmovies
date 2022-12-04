"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      orders.belongsTo(models.users);
      //Relacion entre order y article
      orders.belongsTo(models.articles);
    }
  }
  orders.init(
    {
      id_order: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      rentingDate: DataTypes.DATEONLY,
      UserIdUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id_user",
        },
      },

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
      modelName: "orders",
      timestamps: false,
    }
  );
  return orders;
};
