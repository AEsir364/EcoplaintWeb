import React from "react";
import Header from "../../Componentes/Header";
import Relatorios from "../../Componentes/Relatorios";
import Logo from "../../Componentes/Logo";
import Inputs from "../../Componentes/Inputs";
import '../index.css'; // Importa o CSS para o espaçamento

const TelaRelatorio = () => {
  return (
    <div>
      <Header />
      <Logo />
      <div className="container">
        <Inputs />
        <Relatorios />
      </div>
    </div>
  );
};

export default TelaRelatorio;
