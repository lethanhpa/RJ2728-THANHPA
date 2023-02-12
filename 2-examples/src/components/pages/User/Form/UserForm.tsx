import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UserForm: React.FC = () => {
  let params = useParams();
  const navigate = useNavigate();
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
      alert("Update Successfully!!!");
      updateUser(userName, userAge);
    } else {
      alert("Create Successfully!!!");
      createUser(userName, userAge);
    }
    const url = "https://63e47d654474903105ec4e57.mockapi.io/api/v1/users/";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Succsess:", data);
        setUserName(data.name);
        setUserAge(data.age);
        navigate("/");
      })
      .catch((error) => {
        console.error("ERROR:", error);
      });
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
      method: "POST",
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
    <div className="d-flex justify-content-center pt-5">
      <form
        className="w-50 border border-3 rounded-3 p-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            defaultValue={userName}
            onChange={handleChangeUserName}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            defaultValue={userAge}
            onChange={handleChangeUserAge}
          />
        </div>
        <button type="submit" className="btn btn-info text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
