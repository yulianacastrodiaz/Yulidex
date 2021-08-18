const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('type', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    }
  }, {
    timestamps: false
  });
};