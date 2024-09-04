import React from "react";
import Header from "../../Componentes/Header";
import Relatorios from "../../Componentes/Relatorios";
import Logo from "../../Componentes/Logo";
import Inputs from "../../Componentes/Inputs";
import TextoRelatorios from "../../Componentes/Texto";
import '../index.css';

const TelaRelatorio = () => {
  return (
    <div>
      <Header />
      <Logo />
      <div className="container">
        <Inputs />
      </div>
      <TextoRelatorios />
      <div className="relatorios-isolados">
        <Relatorios />
      </div>
    </div>
  );
};

export default TelaRelatorio;
