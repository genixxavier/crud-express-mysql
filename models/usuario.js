'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    sexo: DataTypes.STRING,
    celular: DataTypes.STRING,
    sueldo: DataTypes.FLOAT,
    afp: DataTypes.INTEGER,
    onp: DataTypes.INTEGER
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};