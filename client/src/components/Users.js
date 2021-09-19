import React, { useState } from "react";
import axios from "axios";
import DeleteUsers from "./DeleteUsers";

const Users = ({ users }) => {
  // edit les utilisateur
  const [isEditing, setIsEditing] = useState(false);
  const [editedFirstname, setEditFirstname] = useState("");
  const [editedLastname, setEditLastname] = useState("");
  const [editedAdress, setEditAdress] = useState("");
  const [editedStatus, setEditStatus] = useState("");

  const handleEdit = () => {
    axios({
      method: "put",
      url: `/person/` + users._id,
      data: {
        firstname: editedFirstname ? editedFirstname : users.firstname, //si editedfirstname est sur "true"(?) alors on affiche etitedFirstname sinon(:) on affiche users.firstname
        lastname: editedLastname ? editedLastname : users.lastname,
        adress: editedAdress ? editedAdress : users.adress,
        status: editedStatus ? editedStatus : users.status,
      },
    }).then(() => {
      setIsEditing(false);
    });
  };

  return (
    <tr>
      {isEditing ? (
        <td>
          <input
            onChange={(e) => setEditFirstname(e.target.value)}
            autoFocus
            defaultValue={editedFirstname ? editedFirstname : users.firstname}
          ></input>
        </td>
      ) : (
        <td>{editedFirstname ? editedFirstname : users.firstname}</td>
      )}

      {isEditing ? (
        <td>
          <input
            onChange={(e) => setEditLastname(e.target.value)}
            autoFocus
            defaultValue={editedLastname ? editedLastname : users.lastname}
          ></input>
        </td>
      ) : (
        <td>{editedLastname ? editedLastname : users.lastname}</td>
      )}

      {isEditing ? (
        <td>
          <input
            onChange={(e) => setEditAdress(e.target.value)}
            autoFocus
            defaultValue={editedAdress ? editedAdress : users.adress}
          ></input>
        </td>
      ) : (
        <td>{editedAdress ? editedAdress : users.adress}</td>
      )}

      {isEditing ? (
        <td>
          <input
            type="radio"
            name="status"
            onChange={(e) => setEditStatus(e.target.value)}
            value={editedStatus ? editedStatus : "Actif"}
          />
          <label>Actif</label>

          <input
            type="radio"
            name="status"
            onChange={(e) => setEditStatus(e.target.value)}
            value={editedStatus ? editedStatus : "Inactif"}
          />
          <label>Inactif</label>
        </td>
      ) : (
        <td>{editedStatus ? editedStatus : users.status}</td>
      )}

      {isEditing ? (
        <td>
          <button onClick={handleEdit}>&#10004;</button>
        </td>
      ) : (
        <td>
          <button onClick={() => setIsEditing(true)}>&#9998;</button>
        </td>
      )}

      <td>
        <DeleteUsers id={users._id} />
      </td>
    </tr>
  );
};

export default Users;
