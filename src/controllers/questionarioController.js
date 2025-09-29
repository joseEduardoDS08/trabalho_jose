const Questionario = require('../models/Questionario');
const Usuario = require('../models/Usuario');

async function cadastrarQuestionario(req, res) {
  try {
    const { usuarioId } = req.body;

    const usuario = await Usuario.findByPk(usuarioId);
    if (!usuario) {
      return res.status(400).json({ erro: 'Usuário não encontrado.' });
    }

    const questionario = await Questionario.create({ ...req.body, usuarioId });
    return res.status(201).json(questionario);
  } catch (error) {
    return res.status(400).json({ erro: 'Todos os campos obrigatórios devem ser preenchidos corretamente.' });
  }
}

module.exports = { cadastrarQuestionario };
