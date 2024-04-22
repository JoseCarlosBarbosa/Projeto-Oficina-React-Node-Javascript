import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Padrao() {
  const [reload, setReload] = useState(false);

  const handleReload = () => {
    setReload(true);
  };

  if (reload) {
    window.location.reload();
    setReload(false);
  }

  return (
    <div className="centralOrdem-1">
      <div className="central-2">
        <div className="containerPadrao">
          <div className="card cart">
            <label className="title">Ordem de serviço: ID</label>

            <label className="title">Cliente: Nome</label>
            <div className="steps">
              <div className="step">
                <div className="info-basic">
                  <span>Data:</span>
                  <p>Placa:</p>
                  <p>Ano:</p>
                  <p>Modelo:</p>
                  <p>Media de tempo:</p>
                  <p>Id Cliente:</p>
                </div>
                <hr />
                <div>
                  <label className="title">
                    <h3 className="">PEÇAS UTILIZADAS</h3>
                  </label>
                  <p>PÉÇA X</p>
                </div>
                <div>
                  <label className="title">
                    <h3>MÃO DE OBRA</h3>
                  </label>
                  <p>TROCA X </p>
                </div>
                <hr />
                <div className="promo">
                  <span>ADICIONAR PEÇA</span>
                  <form className="form">
                    <input
                      type="text"
                      placeholder="Mão de Obra"
                      className="input_field"
                    />
                    <input
                      type="text"
                      placeholder="Descrição da peça"
                      className="input_field"
                    />
                    <input
                      type="text"
                      placeholder="R$"
                      className="input_field"
                    />
                    <button type="button" onClick={handleReload}>
                      Adicionar
                    </button>
                  </form>
                </div>
                <hr />
                <div className="payments">
                  <span>PAGAMENTO</span>
                  <div className="details">
                    <span>Mão de Obra:</span>
                    <span>$240.00</span>
                    <span>Peças:</span>
                    <span>$100.00</span>
                    <span>Desconto:</span>
                    <span>R$100.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card checkout">
            <div className="footer">
              <label className="price">$280.40</label>
              <Link to={'/listaOrdemServico'}>
                <button className="checkout-btn">Cancelar</button>
                <button className="checkout-btn">Finalizar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Padrao;
