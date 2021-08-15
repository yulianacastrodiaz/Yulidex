const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      validate:{
        is: {
          arg: /[0-9]+[A-Za-z]/,
          msg: "el id debería contener al menos un número y una letra",
        },
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: "El nombre no debe estar vacio"
        },
        isAlpha: {
          msg: "El nombre debe ser exclusivamente caracteres alfabéticos",
        }
      }
    },
    vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isInt: {
          msg: "Debería ser un entero"
        }
      }
    },
    fuerza: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isInt: {
          msg: "Debería ser un entero"
        }
      }
    },
    defensa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isInt: {
          msg: "Debería ser un entero"
        }
      }
    },
    velocidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        isInt: {
          msg: "Debería ser un entero"
        }
      }
    },
    altura: {
      type: DataTypes.FLOAT,
      validate:{
        isFloat: {
          msg: "Debería ser un decimal"
        }
      }
    },
    peso: {
      type: DataTypes.FLOAT,
      validate:{
        isFloat: {
          msg: "Debería ser un decimal"
        }
      }
    },
  });
};
