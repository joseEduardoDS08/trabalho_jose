const express = require('express');
const multer = require('multer');
const Animal = require('../models/Animal');

const router = express.Router();
const upload = multer();

router.post('/animais', upload.single('foto'), async (req, res) => {
  try {
    const { nome, especie, porte, castrado, vacinado, descricao } = req.body;
    const foto = req.file?.buffer;

    if (!nome || !especie || !porte || castrado === undefined || vacinado === undefined || !descricao || !foto) {
      return res.status(400).json({ erro: 'Todos os campos obrigatórios devem ser preenchidos corretamente.' });
    }

    const animal = await Animal.create({
      nome,
      especie,
      porte,
      castrado: castrado === 'true',
      vacinado: vacinado === 'true',
      descricao,
      foto
    });

    res.status(201).json(animal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: 'Erro interno ao cadastrar o animal.' });
  }
});

module.exports = router;
