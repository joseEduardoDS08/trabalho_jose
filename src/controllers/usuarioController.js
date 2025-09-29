const Usuario = require('../models/Usuario');

async function cadastrarUsuario(req, res) {
  try {
    const { email, nome_completo, senha, cidade, estado, idade, telefone } = req.body;

    if (!email || !nome_completo || !senha || !cidade || !estado || !idade || !telefone) {
      return res.status(400).json({ erro: 'Todos os campos obrigatórios devem ser preenchidos corretamente.' });
    }

    const existente = await Usuario.findOne({ where: { email } });
    if (existente) {
      return res.status(400).json({ erro: 'Email preenchido já está sendo utilizado.' });
    }

    const novoUsuario = await Usuario.create(req.body);
    return res.status(201).json(novoUsuario);
  } catch (error) {
    return res.status(500).json({ erro: 'Erro interno ao cadastrar o tutor.' });
  }
}

module.exports = { cadastrarUsuario };
