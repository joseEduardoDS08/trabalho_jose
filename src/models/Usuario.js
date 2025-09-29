const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const { v4: uuidv4 } = require('uuid');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.UUID,
    defaultValue: uuidv4,
    primaryKey: true,
  },
  nome_completo: { type: DataTypes.STRING, allowNull: false },
  senha: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  cidade: { type: DataTypes.STRING, allowNull: false },
  estado: { type: DataTypes.STRING, allowNull: false },
  idade: { type: DataTypes.INTEGER, allowNull: false },
  telefone: { type: DataTypes.STRING, allowNull: false },
  instagram: { type: DataTypes.STRING },
  facebook: { type: DataTypes.STRING },
}, {
  timestamps: true,
});

module.exports = Usuario;
