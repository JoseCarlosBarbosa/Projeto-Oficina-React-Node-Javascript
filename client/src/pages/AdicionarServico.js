import AppBarLateral from "../componets/componetsAgrupados/AppBarLateral";
import CabecalhoPag from "../componets/componetsAgrupados/CabecalhoPagInicial";
import ListaDeAdicaoDeServicos from "../componets/componetsAgrupados/ListaDeAdicaoDeServicos";

function AdicionarServico() {
    return (
        <main>
            <CabecalhoPag></CabecalhoPag>
            <AppBarLateral></AppBarLateral>
            <ListaDeAdicaoDeServicos></ListaDeAdicaoDeServicos>
        </main>
    );
}
export default AdicionarServico;