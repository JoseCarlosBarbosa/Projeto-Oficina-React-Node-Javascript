import React from "react";
import { Link } from "react-router-dom";


function BAdcServico() {
    return (
        <div className="container">
            <div className="row">
                
                <Link to={"/adicionarServiço"}>
                    <button type="button" className="botoes">Adicionar Serviço</button>
                </Link>
            </div>
        </div>
    );

}
export default BAdcServico;
