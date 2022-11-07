'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // users.belongsTo(models.rols)
      //Relacion entre user-order
      users.belongsTo(models.rols)
      users.hasMany(models.orders)

    }
  }
  users.init({
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    age: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    mail: DataTypes.STRING,
    password: DataTypes.STRING,
    RolIdRol: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'rols',
        key: 'id_rol'
      }
    }
  }, {
    sequelize,
    modelName: 'users',
    timestamps: false
  });
  return users;
};