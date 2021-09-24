import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="nav-container">
        <NavLink exact to="/">
          <img
            className="logo"
            src="./img/Qwest_TV_Logo.png"
            alt="logo"
            to="/"
          />
        </NavLink>

        <ul className="nav-links">
          <li>
            <NavLink exact to="/" activeClassName="nav-active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to="/nouvelle-utilisateur"
              activeClassName="nav-active"
            >
              Ajouter un utilisateur
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
