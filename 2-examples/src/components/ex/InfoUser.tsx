import userEvent from "@testing-library/user-event";
import React, { useState } from "react";

type Props = {};

const InfoUser = (props: Props) => {
  const [listUser, setListUser] = useState([
    {
      name: "user 1",
      age: 18,
    },
    {
      name: "user 2",
      age: 19,
    },
    {   
      name: "user 3",
      age: 20,
    },
  ]);

  const user = {
    name: "user object",
    age: 18,
  };
  return (
    <div className="p-5 text-center">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>{user.name}</td>
            <td>{user.age}</td>
          </tr>
          {listUser.map((item, index) => (
            <tr key={index}>
              <th>{index + 2}</th>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InfoUser;
