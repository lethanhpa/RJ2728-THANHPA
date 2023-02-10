import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserForm: React.FC = () => {
  let params = useParams();
  const [userName, setUserName] = useState<string>();
  const [userAge, setUserAge] = useState<number>();

  useEffect(() => {
    if (params.id) {
      getUser(params.id);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (params.id) {
      console.log("handelSubmit", "Update");
      updateUser(userName, userAge);
    } else {
      console.log("handleSubmit", "Create");
      createUser(userName, userAge);
    }
  };

  const getUser = (userId: string) => {
    console.log(params.id);
    const url =
      "https://63e47d654474903105ec4e57.mockapi.io/api/v1/users/" + userId;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Succsess:", data);
        setUserName(data.name);
        setUserAge(data.age);
      })
      .catch((error) => {
        console.error("ERROR:", error);
      });
  };

  const createUser = (name: string | undefined, age: number | undefined) => {
    const url = "https://63e47d654474903105ec4e57.mockapi.io/api/v1/users";
    const data = {
      name: name,
      age: age,
    };
    fetch(url, {
      method: "POST", // or PUT
      headers: {
        "Content-Type": "application/json",
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

  const updateUser = (name: string | undefined, age: number | undefined) => {
    const url =
      "https://63e47d654474903105ec4e57.mockapi.io/api/v1/users/" + params.id;
    const data = {
      name: name,
      age: age,
    };
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
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

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempValue = e.target.value;
    setUserName(tempValue);
  };

  const handleChangeUserAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tempValue = e.target.value;
    setUserAge(parseInt(tempValue));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        defaultValue={userName}
        onChange={handleChangeUserName}
      />
      <input
        type="number"
        defaultValue={userAge}
        onChange={handleChangeUserAge}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
