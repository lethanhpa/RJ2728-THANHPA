import React, { useEffect, useState } from "react";

type Props = {};

interface IUser {
  name: string;
  age: number;
  id: string | number;
}

const InfoUser = (props: Props) => {
  const [listUser, setListUser] = useState<Array<IUser>>([]);

  useEffect(() => {
    getListUser();
  }, []);

  const getListUser = () => {
    const url = "https://63a06bb524d74f9fe837bdf6.mockapi.io/users";
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

  const handleDelete = (id: string | number) => {
    const url = "https://63a06bb524d74f9fe837bdf6.mockapi.io/users/" + id;
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

  const createUser = () => {
    const data = {};
    fetch("http://example.com/movies.json", {
      method: "POST", // or PUT
      headers: {
        "Content-Type": "aplication/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  return (
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
                <button className="btn btn-dark">Detail</button>
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
  );
};

export default InfoUser;
