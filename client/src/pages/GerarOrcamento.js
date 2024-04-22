import AppBarLateral from '../componets/componetsAgrupados/AppBarLateral';
import CabecalhoPag from '../componets/componetsAgrupados/CabecalhoPagInicial';
import CardOrcamento from '../componets/componetsAgrupados/CardGerarOrcamento';

function GerarOrcamento() {
  return (
    <main>
      <CabecalhoPag></CabecalhoPag>
      <AppBarLateral></AppBarLateral>
      <CardOrcamento />
    </main>
  );
}

export default GerarOrcamento;
