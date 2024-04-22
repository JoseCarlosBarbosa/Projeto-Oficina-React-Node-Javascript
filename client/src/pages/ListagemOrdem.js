import AppBarLateral from '../componets/componetsAgrupados/AppBarLateral';
import CabecalhoPag from '../componets/componetsAgrupados/CabecalhoPagInicial';
import QuadroOrdemServicos from '../componets/botoes/QuadroOrdemServicoList';

function CadastroOrdemServico() {
  return (
    <main>
      <CabecalhoPag></CabecalhoPag>
      <AppBarLateral></AppBarLateral>
      <QuadroOrdemServicos></QuadroOrdemServicos>
    </main>
  );
}

export default CadastroOrdemServico;
