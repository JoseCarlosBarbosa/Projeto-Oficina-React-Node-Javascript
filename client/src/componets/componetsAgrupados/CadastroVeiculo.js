
import React from "react";
import { Link } from "react-router-dom";




function CcadastroVeiculo() {

    return (

        <div className="main">
            <h2 className="titulo-pag">Cadastro Veiculo</h2>
            <div className="central">

                <div className="central-2">
                    <input className="form-control" type="text" placeholder="Placa" />
                    <div>
                        <input className="form-control" type="text" placeholder="Chassi" />
                    </div>
                    <div>
                        <input className="form-control" type="text" placeholder="Marca" />
                    </div>
                    <div>
                        <input className="form-control" type="text" placeholder="Modelo" />
                    </div>
                    <div>
                        <input className="form-control" type="text" placeholder="Ano"  />
                    </div>
                    <div>
                        <input className="form-control" type="text" placeholder="ID Cliente"  />
                    </div>
                    <Link to="/">

                        <button className="botaoSalvar" type="button" >Salvar</button>

                    </Link>
                </div>

            </div>
        </div>
    );
}

export default CcadastroVeiculo;