
import React from "react";
import { Link } from "react-router-dom";




function CcadastroCliente() {

    return (


        <div className="main">
            <h2 className="titulo-pag">Cadastro Cliente</h2>

            <div className="central">
                <div className="central-2">

                    <input className="form-control" type="text" placeholder="Nome" />
                    <div>
                        <input className="form-control" type="text" placeholder="CPF" />
                    </div>
                    <div>
                        <input className="form-control" type="text" placeholder="Telefone" />
                    </div>
                    <div>
                        <input className="form-control" type="text" placeholder="Endereço" />
                    </div>
                    <div>
                        <input className="form-control" type="text" placeholder="ID" disabled />
                    </div>
                    <Link to="/">

                        <button className="botaoSalvar" type="button" >Salvar</button>

                    </Link>
                </div>
            </div>
        </div>


    );

}

export default CcadastroCliente;


