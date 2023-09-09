'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Service.init({
    service_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dog_name: DataTypes.STRING,
    breed: DataTypes.STRING,
    size: DataTypes.STRING,
    package: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Service',
    tableName: 'service'
  });
  return Service;
};