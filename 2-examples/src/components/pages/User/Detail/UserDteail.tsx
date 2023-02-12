import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from './UserDetail.module.css'
interface IUser {
  name: string;
  age: number;
  id: string | number;
}

const UserDetail: React.FC = () => {
  let params = useParams();
  const [user, setUser] = useState<IUser>();
  useEffect(() => {
    //cpmDidMount
    getUser();
  }, []);
  const getUser = () => {
    console.log(params.id);
    const url =
      "https://63e47d654474903105ec4e57.mockapi.io/api/v1/users/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Succsess:", data);
        setUser(data);
      })
      .catch((error) => {
        console.error("ERROR:", error);
      });
  };
  return (
    <div className={Styles.container}>
      <div className="p-5 text-center d-flex justify-content-center">
      <table className="table table-dark table-hover w-75">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{user?.id}</th>
            <td>{user?.name}</td>
            <td>{user?.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default UserDetail;
