const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      isInt: {
        msg: "El nombre debería ser único. Este nombre ya existe."
      },
      validate: {
        notNull: {
          msg: 'Por favor ingrese un nombre.'
        }
      }
    },
    vida: {
      type: DataTypes.INTEGER,
      validate:{
        isNumeric: true,
        isInt: true,
      }
    },
    fuerza: {
      type: DataTypes.INTEGER,
      validate:{
        isNumeric: true,
        isInt: true,
      }
    },
    defensa: {
      type: DataTypes.INTEGER,
      validate:{
        isNumeric: true,
        isInt: true,
      }
    },
    velocidad: {
      type: DataTypes.INTEGER,
      validate:{
        isNumeric: true,
        isInt: true,
      }
    },
    altura: {
      type: DataTypes.FLOAT,
      validate:{
        isNumeric: true,
        isFloat: true,
      }
    },
    fuerza: {
      type: DataTypes.FLOAT,validate:{
        isNumeric: true,
        isFloat: true,
      }
    },
  });
};
