import TelaInicio from "./Telas/TelaInicio";
import TelaRelatorio from "./Telas/TelaRelatorio";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

export default function Rotas() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<TelaInicio />}/>
              <Route path="/TelaRelatorio" element={<TelaRelatorio />} />
          </Routes>
          
      </BrowserRouter>
    )
  }