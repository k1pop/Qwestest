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
    <>
      <Navigation />
      <div className="main-container">
        <>
          {/* post data rapide */}
          <div className="container-rapide">
            <div className="title">Ajout rapide</div>

            <form onSubmit={(e) => handleSubmit(e)}>
              <div className="user-detailrapide">
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
                  placeholder="Votre Adresse Email..."
                />
                <input
                  type="radio"
                  name="status"
                  id="actif"
                  onChange={(e) => setStatus(e.target.value)}
                  value={"Actif"}
                />
                <label for="actif">Actif</label>

                <input
                  type="radio"
                  name="status"
                  id="inactif"
                  onChange={(e) => setStatus(e.target.value)}
                  value={"Inactif"}
                />
                <label for="inactif">Inactif</label>
              </div>
              <div className="button-rapide">
                <input type="submit" value="Valider l'inscription" />
              </div>
            </form>
          </div>
        </>
        <>{/* filtre */}</>

        <>
          {/* get data */}
          <br />
          <table className="content-table">
            <thead className="thead">
              <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Adresse Email</th>
                <th>Status</th>
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
        </>
      </div>
    </>
  );
};

export default Home;
