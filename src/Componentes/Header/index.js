import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Inicial</Link>
          </li>
          <li>
            <Link to="/TelaRelatorio">Relatórios</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
