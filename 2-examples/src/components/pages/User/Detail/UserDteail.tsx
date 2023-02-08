import React, { useEffect, useState } from "react";

interface IUser {
  name: string;
  age: number;
  id: string | number;
}

const UserDetail: React.FC = () => {
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
    const url = "https://63a06bb524d74f9fe837bdf6.mockapi.io/users/4";
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
  return <div>{user?.name}</div>;
};

export default UserDetail;
