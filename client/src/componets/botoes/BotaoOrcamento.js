import React from 'react';
import {Link} from 'react-router-dom';

function BOrcamento() {
  return (
    <div className="container">
      <div className="row">
        <Link to={'/gerarOrcamento'}>
          <button type="button" className="botoes">
            Orçamento
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BOrcamento;
