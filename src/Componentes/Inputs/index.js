import React, { useState } from "react";
import "./index.css";

const Inputs = (props) => {
  const { placeholder = "Faça a sua pesquisa..." } = props;
  const [valor, setValor] = useState("");

  const aoDigitado = (evento) => {
    setValor(evento.target.value);
    if (props.aoAlterado) {
      props.aoAlterado(evento.target.value); // Chama a função aoAlterado se ela for passada como prop
    }
  };

  return (
    <div className="Inputs">
      <input
        type="text"
        value={valor}
        onChange={aoDigitado}
        placeholder={placeholder}
      />
      <img src="/imagens/Pesquisa.png" alt="Ícone de Pesquisa" className="search-icon" />
    </div>
  );
};

export default Inputs;
