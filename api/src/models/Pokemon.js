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
          msg: "el id debería contener al menos un número y una letra"
        },
      }
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: {
          msg: 'Por favor ingrese un nombre.'
        },
        isString(nombre) {
          if ( typeof nombre !== "string") {
            throw new Error("El nombre debería ser un string")
          }
        }
      }
    },
    vida: {
      type: DataTypes.INTEGER,
      validate:{
        isNumeric: {
          msg: "Debería ser un número"
        },
        isInt: {
          msg: "Debería ser un entero"
        }
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
    peso: {
      type: DataTypes.FLOAT,validate:{
        isNumeric: true,
        isFloat: true,
      }
    },
  });
};
