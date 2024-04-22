import AppBarLateral from '../componets/componetsAgrupados/AppBarLateral';
import CabecalhoPag from '../componets/componetsAgrupados/CabecalhoPagInicial';
import CcadastroCliente from '../componets/componetsAgrupados/CadastroCliente';

import '../style/StylePG1.css';

function CadastroCliente() {
  return (
    <main>
      <CabecalhoPag></CabecalhoPag>
      <AppBarLateral></AppBarLateral>
      <CcadastroCliente></CcadastroCliente>
    </main>
  );
}
export default CadastroCliente;
