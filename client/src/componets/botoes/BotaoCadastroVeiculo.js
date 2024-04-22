import React from "react";
import { Link } from "react-router-dom";

function BCadastroVeiculo() {
    return (
        <div className="container">
            <div className="row">
                <Link to={"/cadastroVeiculo"}>
                    <button type="button" className="botoes">Cadastrar Veiculo</button>
                </Link>
            </div>
        </div>
    );

}

export default BCadastroVeiculo;
