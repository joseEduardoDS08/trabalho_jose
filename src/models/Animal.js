const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Animal = sequelize.define('Animal', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  especie: {
    type: DataTypes.STRING,
    allowNull: false
  },
  porte: {
    type: DataTypes.STRING,
    allowNull: false
  },
  castrado: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  vacinado: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  foto: {
    type: DataTypes.BLOB('long'),
    allowNull: false
  }
});

module.exports = Animal;
