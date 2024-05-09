// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Servidor Node.js funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

app.post('/cadastro-cliente', (req, res) => {
  const {name, cpf, tel, endereco} = req.body;
  console.log('Dados do Formulario: ', {name, cpf, tel, endereco});
  res.send('dados enviados');
});
