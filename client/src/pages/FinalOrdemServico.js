import AppBarLateral from "../componets/componetsAgrupados/AppBarLateral";
import CabecalhoPag from "../componets/componetsAgrupados/CabecalhoPagInicial";
import Padrao from "../componets/componetsAgrupados/CardOrdemServico"


function CadastroOrdemServico() {
    return (
        <main>
            <CabecalhoPag></CabecalhoPag>
            <AppBarLateral></AppBarLateral>
            <Padrao></Padrao>
        </main>
    );
}
export default CadastroOrdemServico;