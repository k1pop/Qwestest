import React, { useState, useEffect } from "react";
import axios from "axios";
import Users from "../components/Users";
import Navigation from "../components/Navigation";

const Home = () => {
  //get data
  const [newsData, setNewsData] = useState([]);

  //post data
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [status, setStatus] = useState("");

  //get data
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:5500/person")
      .then((res) => setNewsData(res.data));
    console.log(newsData);
  };

  //post data
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `/person`,
      data: {
        firstname,
        lastname,
        adress,
        status,
      },
    }).then(() => {
      setFirstName("");
      setLastName("");
      setAdress("");
      setStatus("");
      getData();
    });
  };
  return (
    <div>
      <Navigation />
      <>
        {/* post data rapide */}
        <div>
          <h1>Ajout rapide</h1>

          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstname}
              placeholder="Votre prénom..."
            />

            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastname}
              placeholder="Votre Nom..."
            />

            <input
              type="text"
              onChange={(e) => setAdress(e.target.value)}
              value={adress}
              placeholder="Votre Adresse mail..."
            />
            <input
              type="radio"
              name="status"
              onChange={(e) => setStatus(e.target.value)}
              value={"Actif"}
            />
            <label>Actif</label>

            <input
              type="radio"
              name="status"
              onChange={(e) => setStatus(e.target.value)}
              value={"Inactif"}
            />
            <label>Inactif</label>
            <input type="submit" value="Valider l'inscription" />
          </form>
        </div>
      </>

      {/* get data */}
      <br />
      <table className="table">
        <thead className="thead">
          <tr>
            <th>Prénom</th>
            <th>Nom</th>
            <th>adresse mail</th>
            <th>status</th>
            <th>&#9998; Modifier</th>
            <th>&#10006; Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {newsData.map((users) => (
            <Users key={users._id} users={users} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
