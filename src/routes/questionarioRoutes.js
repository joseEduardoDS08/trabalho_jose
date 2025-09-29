const express = require('express');
const { cadastrarQuestionario } = require('../controllers/questionarioController');
const router = express.Router();

router.post('/questionario', cadastrarQuestionario);

module.exports = router;
