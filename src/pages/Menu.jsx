import React from "react";
import "./styles/Menu.scss";

export const Menu = () => {
  return (
    <div className="menu_container">
      <h1 id="menu_titulo">Gerenciamento</h1>
      <div className="menu_body">
        <div className="cadastrar-os">
        <i class="bi bi-file-earmark-plus"></i>
          <p>Cadastrar OS</p>
        </div>
        <div className="pesquisar">
        <i class="bi bi-search"></i>
          <p>Pesquisar OS / Clientes</p>
        </div>
        <div className="cadastrar-cliente">
        <i class="bi bi-person-add"></i>
          <p>Cadastrar Cliente</p>
        </div>
        <div className="vender">
        <i class="bi bi-currency-dollar"></i>
          <p>Vender Produtos</p>
        </div>
        <div className="andamento">
        <i class="bi bi-file-earmark"></i>
        <i class="bi bi-search"></i>
          <p>OS em Andamento</p>
        </div>
        <div className="relatorio">
        <i class="bi bi-graph-up"></i>
          <p>Relatório de Faturamento</p>
        </div>
      </div>
    </div>
  );
};
