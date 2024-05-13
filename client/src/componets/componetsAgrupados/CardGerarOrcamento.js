import axios from 'axios';
import {useState} from 'react';
import {Link} from 'react-router-dom';

function CardOrcamento() {
  const [nomeClient, setNomeClient] = useState('');
  const [placaVeiculo, setPlacaVeiculo] = useState('');
  const [dataEntrada, setDataEntrada] = useState('');
  const [previsaoTempoServico, setPrevisaoTempoServico] = useState('');
  const [descricaoServico, setDescricaoServico] = useState('');
  const [valorServico, setValorServico] = useState('');
  const [descricaoPecas, setDescricaoPecas] = useState('');
  const [valorPecas, setValorPecas] = useState('');

  const config = {
    Headers: {
      'Content-Type': 'application/json',
    },
  };

  const handleEnviarOrcamento = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3001/cadastro-orcamento',
        {
          nomeClient: nomeClient,
          placaVeiculo: placaVeiculo,
          dataEntrada: dataEntrada,
          previsaoTempoServico: previsaoTempoServico,
          descricaoServico: descricaoServico,
          valorServico: valorServico,
          descricaoPecas: descricaoPecas,
          valorPecas: valorPecas,
        },
      );
      console.log('resposta do servidor', response.data);
      setNomeClient('');
      setDataEntrada('');
      setDescricaoPecas('');
      setDescricaoServico('');
      setPlacaVeiculo('');
      setPrevisaoTempoServico('');
      setValorPecas('');
      setValorServico('');
    } catch (error) {
      console.log('erro ao enviar orçamento', error);
    }
  };

  return (
    <div className="centralOrdem-2">
      <div className="central-2">
        <div className="containerPadrao">
          <div className="card cart">
            <div className="steps">
              <div className="step">
                <span>Informações Pessoais</span>
                <form className="form">
                  <input
                    type="text"
                    placeholder="Cliente:"
                    className="input_field"
                    id="name-cliente-orcamento"
                    value={nomeClient}
                    onChange={e => setNomeClient(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Placa:"
                    className="input_field"
                    id="placa-veiculo-orcamento"
                    value={placaVeiculo}
                    onChange={e => setPlacaVeiculo(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Data de Entrada"
                    className="input_field"
                    id="data-entrada"
                    value={dataEntrada}
                    onChange={e => setDataEntrada(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Previsão tempo de serviço"
                    className="input_field"
                    id="previsao-servico"
                    value={previsaoTempoServico}
                    onChange={e => setPrevisaoTempoServico(e.target.value)}
                  />
                </form>

                <span>Descrição Serviço</span>
                <form className="form">
                  <input
                    type="text"
                    placeholder="Descreva Serviço"
                    className="input_field"
                    id="descricao-servico"
                    value={descricaoServico}
                    onChange={e => setDescricaoServico(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Valor: R$"
                    className="input_field"
                    id="valor-servico"
                    value={valorServico}
                    onChange={e => setValorServico(e.target.value)}
                  />
                </form>

                <span>Peças para utilizar </span>
                <form className="form">
                  <input
                    type="text"
                    placeholder="Descreva peças"
                    className="input_field"
                    id="descricao-Pecas"
                    value={descricaoPecas}
                    onChange={e => setDescricaoPecas(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Valor: R$"
                    className="input_field"
                    id="valor-Pecas"
                    value={valorPecas}
                    onChange={e => setValorPecas(e.target.value)}
                  />
                </form>

                <hr />
                <div className="payments">
                  <span>PAGAMENTO</span>

                  <div className="details">
                    <span>Mão de Obra:</span>
                    <span>$240.00</span>
                    <span>Peças:</span>
                    <span>$100.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card checkout">
            <div className="footer">
              <label className="price">$240.00</label>
              <Link to="/">
                <button className="checkout-btn">Cancelar</button>
                <button
                  onClick={e => handleEnviarOrcamento(e)}
                  id="btn-enviar-orcamento"
                  type="button"
                  className="checkout-btn">
                  Enviar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOrcamento;
