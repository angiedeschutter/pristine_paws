'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Service extends Model {

    static associate({Login}) {
     // Service.belongsTo(Login,{
     //   foreignKey: "user_id",
        //as: "service"
     // })
    }
  }
  Service.init({
    service_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dog_name: DataTypes.STRING,
    breed: DataTypes.STRING,
    size: DataTypes.STRING,
    pack: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Service',
    tableName: 'service'
  });
  return Service;
};