'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, {
        foreignKey:'id_user'
      })
      //Relacion entre article y order
      this.belongsToMany(models.article, { through: "article-order" })
    }
  }
  order.init({
    id_order: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    rentingDate: DataTypes.DATE,
    returnDate: DataTypes.DATE,
    id_user:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};