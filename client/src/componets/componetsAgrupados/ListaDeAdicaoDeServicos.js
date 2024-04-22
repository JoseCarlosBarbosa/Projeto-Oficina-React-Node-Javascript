import {Link} from 'react-router-dom';

function ListaDeAdicaoDeServicos() {
  return (
    <div>
      {' '}
      <h2 className="titulo-pag">Adicionar Serviço</h2>
      <div className="card-style-ordens">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <Link to="/cadastroOrdemServico">
                <button className="modificaServico"> + </button>
              </Link>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListaDeAdicaoDeServicos;
/* */
