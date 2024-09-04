import React from "react";
import "./index.css";

const Relatorios = () => {
  const relatorios = [
    {
      id: 1,
      titulo: "Floresta Nacional do Jamari, KM 100, Porto Velho, Rondônia",
      descricao:
        "Vi umas máquinas enormes derrubando as árvores na Floresta do Jamari. A área devastada é gigantesca, deve ser coisa de mais de 50 hectares. E ainda incendiaram tudo, provavelmente pra criar pasto.",
      acompanhamento: "Prezado(a) usuário(a), recebemos sua denúncia.",
      status: "vermelho",
    },
    {
      id: 2,
      titulo: "Reserva Extrativista Rio Pacáas Novos, perto de Guajará-Mirim, Rondônia",
      descricao:
        "Vi umas máquinas enormes derrubando as árvores na Floresta do Jamari. A área devastada é gigantesca, deve ser coisa de mais de 50 hectares. E ainda incendiaram tudo, provavelmente pra criar pasto.",
      acompanhamento: "Prezado(a) usuário(a), recebemos sua denúncia.",
      status: "amarelo",
    },
  ];

  return (
    <div className="relatorios">
      <ul>
        {relatorios.map((relatorio) => (
          <li key={relatorio.id}>
            <img src="/imagens/relatorio-image.png" alt="Imagem do relatório" />
            <div className="relatorios-conteudo">
              <h3>{relatorio.titulo}</h3>
              <p>{relatorio.descricao}</p>
            </div>
            <div className="relatorios-acompanhamento">
              <h4>Acompanhamento</h4>
              <div className="acompanhamento-indicador">
                <span className={`indicador-${relatorio.status}`}></span>
                <p>{relatorio.acompanhamento}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Relatorios;
