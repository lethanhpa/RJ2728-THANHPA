import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface IUser {
  name: string;
  age: number;
  id: string | number;
}

const UserDetail: React.FC = () => {
  let params = useParams();
  const [user, setUser] = useState<IUser>({
    name: "1a",
    age: 17,
    id: 4,
  });
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
  return <div>DETAIL: {user?.name}</div>;
};

export default UserDetail;
