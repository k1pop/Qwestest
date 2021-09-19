import React, { useState } from "react";
import axios from "axios";
import Navigation from "../components/Navigation";

const NewUsers = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [status, setStatus] = useState("");

  const handleRegister = () => {
    axios({
      method: "post",
      url: `/person`,
      data: {
        firstname,
        lastname,
        adress,
        status,
      },
    });
  };

  return (
    <>
      <div>
        <Navigation />
        <h1>Ajouter un utilisateur</h1>

        <form onSubmit={handleRegister}>
          <label>Prénom</label>
          <br />
          <input
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstname}
            placeholder="Votre prénom..."
          />
          <br />
          <label>Nom</label>
          <br />
          <input
            type="text"
            onChange={(e) => setLastName(e.target.value)}
            value={lastname}
            placeholder="Votre Nom..."
          />
          <br />
          <label>Adresse mail</label>
          <br />
          <input
            type="text"
            onChange={(e) => setAdress(e.target.value)}
            value={adress}
            placeholder="Votre Adresse mail..."
          />
          <br />

          <label>Status</label>
          <br />
          <input
            type="radio"
            name="status"
            onChange={(e) => setStatus(e.target.value)}
            value={"Actif"}
          />
          <label>Actif</label>
          <br />

          <input
            type="radio"
            name="status"
            onChange={(e) => setStatus(e.target.value)}
            value={"Inactif"}
          />
          <label>Inactif</label>
          <br />

          <input type="submit" value="Valider l'inscription" />
        </form>
      </div>
    </>
  );
};
export default NewUsers;
