const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    ID:{
      type: DataTypes.VIRTUAL,
      get: function(){
        return `${this.id[0]}${this.id[1]}${this.id[2]}${this.id[3]}`
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
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          msg: "El hp no debe estar vacio"
        },
        isInt: {
          msg: "Debería ser un entero"
        }
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          msg: "El attack no debe estar vacio"
        },
        isInt: {
          msg: "Debería ser un entero"
        }
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          msg: "La defensa no debe estra vacia"
        },
        isInt: {
          msg: "Debería ser un entero"
        }
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull: {
          msg: "La velocidad no debe estar vacia"
        },
        isInt: {
          msg: "Debería ser un entero"
        }
      }
    },
    height: {
      type: DataTypes.FLOAT,
      validate:{
        isFloat: {
          msg: "Debería ser un flotante"
        }
      }
    },
    weight: {
      type: DataTypes.FLOAT,
      validate:{
        isFloat: {
          msg: "Debería ser un flotante"
        }
      }
    },
  });
};
