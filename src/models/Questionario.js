const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Usuario = require('./Usuario');

const Questionario = sequelize.define('Questionario', {
  empregado: { type: DataTypes.BOOLEAN, allowNull: false },
  quantos_animais_possui: { type: DataTypes.INTEGER, allowNull: false },
  motivos_para_adotar: { type: DataTypes.STRING, allowNull: false },
  data_disponivel_para_buscar_animal: { type: DataTypes.STRING, allowNull: false },
}, {
  timestamps: true,
});

Questionario.belongsTo(Usuario, { foreignKey: 'usuarioId' });

module.exports = Questionario;
