import React from "react";
import { Link } from "react-router-dom";

function BCadastroVeiculo() {
    return (
        <div className="container">
            <div className="row">
                <Link to={"/listaOrdemServico"}>
                    <button type="button" className="botoes">Ordem de Serviço</button>
                </Link>
            </div>
        </div>
    );

}

export default BCadastroVeiculo;
