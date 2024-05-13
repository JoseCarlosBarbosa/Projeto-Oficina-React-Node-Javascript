import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function CcadastroVeiculo() {
  const [placa, setPlaca] = useState('');
  const [chassi, setChassi] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anoVeiculo, setAnoVeiculo] = useState('');
  const [cpf, setCpf] = useState('');

  const config = {
    Headers: {
      'Content-Type': 'application/json',
    },
  };

  const handleCadastroVeiculo = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3001/cadastro-veiculo',
        {
          placa: placa,
          chassi: chassi,
          marca: marca,
          modelo: modelo,
          anoVeiculo: anoVeiculo,
          cpf: cpf,
        },
      );
      console.log('resposta do servidor', response.data);
      setPlaca('');
      setAnoVeiculo('');
      setChassi('');
      setCpf('');
      setMarca('');
      setModelo('');
    } catch (error) {
      console.error('erro ao cadastrar veiculo', error);
    }
  };

  return (
    <div className="main">
      <h2 className="titulo-pag">Cadastro Veiculo</h2>
      <div className="central">
        <div className="central-2">
          <input
            className="form-control"
            type="text"
            id="placa-Veiculo"
            placeholder="Placa"
            value={placa}
            onChange={e => setPlaca(e.target.value)}
          />
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Chassi"
              id="chassi-veiculo"
              value={chassi}
              onChange={e => setChassi(e.target.value)}
            />
          </div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Marca"
              id="marca-veiculo"
              value={marca}
              onChange={e => setMarca(e.target.value)}
            />
          </div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Modelo"
              id="modelo-veiculo"
              value={modelo}
              onChange={e => setModelo(e.target.value)}
            />
          </div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="Ano"
              id="ano-veiculo"
              value={anoVeiculo}
              onChange={e => setAnoVeiculo(e.target.value)}
            />
          </div>
          <div>
            <input
              className="form-control"
              type="text"
              placeholder="CPF Cliente"
              id="CPF-client"
              value={cpf}
              onChange={e => setCpf(e.target.value)}
            />
          </div>
          <Link to="/">
            <button
              onClick={e => handleCadastroVeiculo(e)}
              className="botaoSalvar"
              type="button"
              id="btn-veiculo-submit">
              Salvar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CcadastroVeiculo;
