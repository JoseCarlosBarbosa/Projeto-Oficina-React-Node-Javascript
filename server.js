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

app.post('/cadastro-cliente', (req, res) => {
  const {name, cpf, tel, endereco} = req.body;
  console.log('Dados do Formulario: ', {name, cpf, tel, endereco});
  res.send('dados enviados');
});

app.post('/cadastro-veiculo', (req, res) => {
  const {placa, chassi, marca, modelo, anoVeiculo, cpf} = req.body;
  console.log('Dados do Formulario: ', {
    placa,
    chassi,
    marca,
    modelo,
    anoVeiculo,
    cpf,
  });
  res.send('dados enviados');
});

app.post('/cadastro-orcamento', (req, res) => {
  const {
    nomeClient,
    placaVeiculo,
    dataEntrada,
    previsaoTempoServico,
    descricaoServico,
    valorServico,
    descricaoPecas,
    valorPecas,
  } = req.body;
  console.log('Formulario Orcamento: ', {
    nomeClient,
    placaVeiculo,
    dataEntrada,
    previsaoTempoServico,
    descricaoServico,
    valorServico,
    descricaoPecas,
    valorPecas,
  });
  res.send('dados cadastrados');
});

// app listem tem que ficar por ultimo de tudo, porque ele inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// node email biblioteca; https://mailtrap.io/blog/send-emails-with-nodejs/
// fazer um posto ordem de serviço, salva no banco e na hora que der retorno de der certo faz o envio do email.
