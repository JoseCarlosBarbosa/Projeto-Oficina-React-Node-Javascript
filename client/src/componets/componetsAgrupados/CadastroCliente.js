import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function CcadastroCliente() {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [tel, setTel] = useState('');
  const [endereco, setEndereco] = useState('');

  const config = {
    Headers: {
      'Content-Type': 'application/json',
    },
  };

  const handleCadastro = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3001/cadastro-cliente',
        {
          name: name,
          cpf: cpf,
          tel: tel,
          endereco: endereco,
        },
      );
      console.log('resposta do servidor: ', response.data);

      setName('');
      setCpf('');
      setEndereco('');
      setTel('');
    } catch (error) {
      console.error('erro ao cadastrar cliente', error);
    }
  };

  return (
    <main>
      <div className="main">
        <h2 className="titulo-pag">Cadastro Cliente</h2>

        <div className="central">
          <div className="central-2">
            <input
              className="form-control"
              type="text"
              id="name-client-cadastro"
              placeholder="Nome"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <div>
              <input
                className="form-control"
                type="text"
                id="CPF-client-cadastro"
                placeholder="CPF"
                value={cpf}
                onChange={e => setCpf(e.target.value)}
              />
            </div>
            <div>
              <input
                className="form-control"
                type="text"
                id="tel-client-cadastro"
                placeholder="Telefone"
                value={tel}
                onChange={e => setTel(e.target.value)}
              />
            </div>
            <div>
              <input
                className="form-control"
                type="text"
                id="end-client-cadastro"
                placeholder="Endereço"
                value={endereco}
                onChange={e => setEndereco(e.target.value)}
              />
            </div>
            <Link to="/">
              <button
                onClick={e => handleCadastro(e)}
                className="botaoSalvar"
                type="submit"
                id="btn-client-submit">
                Salvar
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default CcadastroCliente;
