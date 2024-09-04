import React from "react";
import "./index.css";

const Botao = ({ texto, onClick, tipo = "button", estilo }) => {
  return (
    <button className={`Botao ${estilo}`} type={tipo} onClick={onClick}>
      {texto}
    </button>
  );
};

export default Botao;
