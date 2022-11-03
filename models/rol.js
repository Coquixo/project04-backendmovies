'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.user, { foreignKey: 'id_rol' })
    }
  }
  rol.init({
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    type: DataTypes.ENUM('user', 'admin')
  }, {
    sequelize,
    modelName: 'rol',
  });
  return rol;
};