import {Link} from 'react-router-dom';

function QuadroOrdemServicos() {
  return (
    <div>
      {' '}
      <h2 className="titulo-pag">Ordens de Serviço</h2>
      <div className="central-ordem ">
        <div className="card-style-ordens">
          <div className="row">
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Cliente:</h5>
                  <h5 className="card-text">Ordem de serviço: </h5>
                  <h5 className="card-text">Placa: </h5>
                  <h5 className="card-text">Descrição: </h5>
                  <Link to="/cadastroOrdemServico">
                    <button className="botaoAcessarOrdem"> Acessar </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//
export default QuadroOrdemServicos;
