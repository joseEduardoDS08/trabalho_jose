const express = require('express');
const sequelize = require('./database');
const usuarioRoutes = require('./routes/usuarioRoutes');
const questionarioRoutes = require('./routes/questionarioRoutes');
const animaisRoutes = require('./routes/animais');

const app = express();
app.use(express.json());

app.use(usuarioRoutes);
app.use(questionarioRoutes);
app.use('/api', animaisRoutes);

sequelize.sync().then(() => {
    app.listen(3000, () => {
      console.log('API rodando em http://localhost:3000');
    });
});
