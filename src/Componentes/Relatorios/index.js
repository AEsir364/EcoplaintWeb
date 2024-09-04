import React from "react";
import "./index.css";

const Relatorios = () => {
  // Exemplo de dados de relatórios (pode ser dinâmico no futuro)
  const relatorios = [
    { id: 1, titulo: "Relatório de Resíduos", descricao: "Detalhes sobre resíduos no parque." },
    { id: 2, titulo: "Relatório de Poluição", descricao: "Áreas afetadas por poluição." },
  ];

  return (
    <div className="relatorios">
      <h2>Seus Relatórios</h2>
      <ul>
        {relatorios.map((relatorio) => (
          <li key={relatorio.id}>
            <h3>{relatorio.titulo}</h3>
            <p>{relatorio.descricao}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Relatorios;
