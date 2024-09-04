import React from "react";
import FormularioInicio from "../../Componentes/Formulario/FormularioInicio";
import Header from "../../Componentes/Header";
import Logo from "../../Componentes/Logo";
import Texto from "../../Componentes/Texto";

const TelaInicio = () => {
  return (
    <div>
      <Header />
      <Logo />
      <Texto texto="Bem-vindo ao Ecoplaint" />
      <FormularioInicio />
    </div>
  );
};

export default TelaInicio;
