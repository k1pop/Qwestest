import React from "react";
import axios from "axios";

const DeleteUsers = ({ id }) => {
  const handleDelete = () => {
    axios({
      method: "delete",
      url: `/person/` + id,
    });
    window.location.reload();
  };

  return (
    <button
      className="button-delete"
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer cet utilisateur ?")) {
          handleDelete();
        }
      }}
    >
      &#10006;
    </button>
  );
};

export default DeleteUsers;
