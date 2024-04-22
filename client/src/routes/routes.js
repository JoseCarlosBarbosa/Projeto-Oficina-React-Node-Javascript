import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import CadastroCliente from '../pages/CadastroCliente';
import CadastroVeiculo from '../pages/CadastroVeiculo';
import FinalOrdemServico from '../pages/FinalOrdemServico';
import ListaOrdemServico from '../pages/ListagemOrdem';

import AdicionarServico from '../pages/AdicionarServico';
import GerarOrcamento from '../pages/GerarOrcamento';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cadastroCliente" element={<CadastroCliente />}></Route>
        <Route path="/cadastroVeiculo" element={<CadastroVeiculo />}></Route>
        <Route
          path="/cadastroOrdemServico"
          element={<FinalOrdemServico />}></Route>
        <Route
          path="/listaOrdemServico"
          element={<ListaOrdemServico />}></Route>
        <Route path="/gerarOrcamento" element={<GerarOrcamento />}></Route>
        <Route path="/adicionarServiço" element={<AdicionarServico />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
