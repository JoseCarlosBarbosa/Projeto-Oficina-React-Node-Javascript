import React from "react";
import { Link } from "react-router-dom";

function BCadastroCliente() {
    return (
        <div className="container">
            <div className="row">
                <Link to="/cadastroCliente">
                    <button type="button" className="botoes" >Cadastrar Cliente</button>
                </Link>

            </div>

        </div>
    );

}

export default BCadastroCliente;