import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>
      <NavLink exact to="/nouvelle-utilisateur" activeClassName="nav-active">
        Ajouter un utilisateur
      </NavLink>
    </div>
  );
};

export default Navigation;
