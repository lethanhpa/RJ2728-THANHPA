import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./UserList.module.css";

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
    const url =
      "https://63e47d654474903105ec4e57.mockapi.io/api/v1/users/" + userId;
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
    <div className={Styles.div__content}>
      <div className="d-flex justify-content-around flex-wrap text-white">
        {listUser.map((item) => (
          <div key={`user-${item.id}`}>
            <div className="p-5">
              <img src={item.avatar} className={Styles.img} alt="..." />
              <div className="card-body">
                <h4 className="pt-3 card-title">{item.name}</h4>
                <h6 className="pt-3 card-text">City: {item.city}</h6>
                <h6 className="pt-2 card-text">
                  Age: <i>{item.age}</i>
                </h6>
                <div className="d-flex">
                  <button
                    className="btn btn-success"
                    onClick={() => handleUpdate(item.id)}
                  >
                    Update
                  </button>
                 <div className="px-2">
                 <button
                    className="btn btn-warning"
                    onClick={() => handleDetail(item.id)}
                  >
                    Detail
                  </button>
                 </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
