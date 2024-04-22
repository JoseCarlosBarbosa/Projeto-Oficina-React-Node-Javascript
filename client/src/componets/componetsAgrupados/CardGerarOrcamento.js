import {Link} from 'react-router-dom';

function CardOrcamento() {
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
                  />
                  <input
                    type="text"
                    placeholder="Placa:"
                    className="input_field"
                  />
                  <input
                    type="text"
                    placeholder="Data de Entrada"
                    className="input_field"
                  />
                  <input
                    type="text"
                    placeholder="Previsão tempo de serviço"
                    className="input_field"
                  />
                </form>

                <span>Descrição Serviço</span>
                <form className="form">
                  <input
                    type="text"
                    placeholder="Descreva Serviço"
                    className="input_field"
                  />
                  <input
                    type="text"
                    placeholder="Valor: R$"
                    className="input_field"
                  />
                </form>

                <span>Peças para utilizar </span>
                <form className="form">
                  <input
                    type="text"
                    placeholder="Descreva peças"
                    className="input_field"
                  />
                  <input
                    type="text"
                    placeholder="Valor: R$"
                    className="input_field"
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
              <Link to={'/'}>
                <button className="checkout-btn">Cancelar</button>
                <button className="checkout-btn">Enviar</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardOrcamento;
