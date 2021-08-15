const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('tipo', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
    }
  });
};