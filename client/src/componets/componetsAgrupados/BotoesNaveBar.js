import React from 'react';
import BCadastroCliente from '../botoes/BotaoCadastroCliente';
import BCadastroVeiculo from '../botoes/BotaoCadastroVeiculo';
import BOrdenServico from '../botoes/BotaoOrdensServico';
import BAdcServico from '../botoes/BotaoAdcServico';
import BOrcamento from '../botoes/BotaoOrcamento';

// importando os botões

function BotoesNavebar() {
  return (
    <div className="container">
      <BCadastroCliente />
      <BCadastroVeiculo />
      <BOrdenServico />
      <BAdcServico />
      <BOrcamento />
    </div>
  );
}

export default BotoesNavebar;
