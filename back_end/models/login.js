'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Login extends Model {
    
    static associate({Service}) {
      //  Login.hasMany(Service, {
     //   foreignKey: 'user_id',
    //    as: 'service'
    //  })
    }
  }
  Login.init({
    user_id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Login',
    tableName: 'login'
  });
  return Login;
};