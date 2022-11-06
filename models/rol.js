'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rols extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      rols.hasMany(models.users)
    }
  }
  rols.init({
    id_rol: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    }
    
  }, {
    sequelize,
    modelName: 'rols',
    timestamps: false
  });
  return rols;
  
};