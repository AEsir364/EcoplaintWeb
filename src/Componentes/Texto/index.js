import React from "react";
import "./index.css";

const Texto = ({ texto }) => {
  return (
    <div className="texto-centralizado">
      <p>{texto}</p>
    </div>
  );
};

export default Texto;
