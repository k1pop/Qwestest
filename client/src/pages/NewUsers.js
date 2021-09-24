import React, { useState } from "react";
import axios from "axios";

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
      <div className="container-form">
        <div className="title">Ajouter un utilisateur</div>
        <form onSubmit={handleRegister}>
          <div className="user-detail">
            <div className="input-box">
              <label className="details">Prénom</label>
              <input
                required
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstname}
                placeholder="Votre prénom..."
              />
            </div>

            <div className="input-box">
              <label className="details">Nom</label>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                value={lastname}
                placeholder="Votre Nom..."
              />
            </div>

            <div className="input-box">
              <label className="details">Adresse mail</label>
              <input
                type="text"
                onChange={(e) => setAdress(e.target.value)}
                value={adress}
                placeholder="Votre Adresse mail..."
              />
            </div>
          </div>

          <div className="status-details">
            <label className="status-title">Status</label>
            <div className="status-all">
              <input
                className="dot one"
                type="radio"
                name="status"
                id="actif"
                onChange={(e) => setStatus(e.target.value)}
                value={"Actif"}
              />
              <label for="actif" className="status">
                Actif
              </label>

              <input
                className="dot one"
                type="radio"
                name="status"
                id="inactif"
                onChange={(e) => setStatus(e.target.value)}
                value={"Inactif"}
              />
              <label for="inactif" className="status">
                Inactif
              </label>
            </div>
          </div>

          <div className="button">
            <input type="submit" value="Valider l'inscription" />
          </div>
        </form>
      </div>
    </>
  );
};
export default NewUsers;
