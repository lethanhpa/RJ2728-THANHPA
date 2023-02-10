import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserList: React.FC = () => {
  const navigate = useNavigate();
  const [listUser, setListUser] = useState<Array<any>>([]);
  useEffect(() => {
    getListUser();
  }, []);

  const getListUser = () => {
    const url = "https://63e47d654474903105ec4e57.mockapi.io/api/v1/users/";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Succsess:", data);
        setListUser(data);
      })
      .catch((error) => {
        console.error("ERROR:", error);
      });
  };
  
  const handleDelete = (userId: string | number) => {
    const url = "https://63e47d654474903105ec4e57.mockapi.io/api/v1/users/" + userId;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Delete Successfully!!!");
        console.log("Succsess:", data);
        getListUser();
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  const handleDetail = (userId: string | number) => {
    console.log("handleDetail", userId);
    navigate(`detail/${userId}`);
  };

  const handleUpdate = (userId: string | number) => {
    console.log("handleUpdate", userId);
    navigate(`form/${userId}`);
  };

  return (
    <>
      <h1>LIST</h1>
      <div className="p-5 text-center">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Handle</th>
            </tr>
          </thead>
          <tbody>
            {listUser.map((item) => (
              <tr key={`user-${item.id}`}>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <button
                    className="btn btn-dark"
                    onClick={() => handleUpdate(item.id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-dark"
                    onClick={() => handleDetail(item.id)}
                  >
                    Detail
                  </button>
                  <button
                    className="btn btn-dark"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserList;
