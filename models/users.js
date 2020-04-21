'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    nick_name: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  return User;
};