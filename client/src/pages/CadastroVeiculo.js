
import AppBarLateral from "../componets/componetsAgrupados/AppBarLateral";
import CabecalhoPag from "../componets/componetsAgrupados/CabecalhoPagInicial";
import CcadastroVeiculo from "../componets/componetsAgrupados/CadastroVeiculo"



function CadastroVeiculo() {
    return (
        <main>
            <CabecalhoPag></CabecalhoPag>
            <AppBarLateral></AppBarLateral>
            <CcadastroVeiculo></CcadastroVeiculo>
        </main>
    );
}
export default CadastroVeiculo;