import React from "react";
import Header from "../../Componentes/Header";
import Logo from "../../Componentes/Logo";
import Texto from "../../Componentes/Texto";
import '../index.css'; // Inclui o CSS para a página

const TelaInicio = () => {
  return (
    <div>
      <Header />
      <Logo />
      <Texto texto="Bem-vindo ao Ecoplaint" />
    </div>
  );
};

export default TelaInicio;
