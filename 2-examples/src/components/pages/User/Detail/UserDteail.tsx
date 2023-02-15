import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Styles from "./UserDetail.module.css";
interface IUser {
  name: string;
  city: string;
  avatar: string;
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
    <div className={Styles.div__content}>
      <div className="d-flex justify-content-center text-white">
        <div className="p-5">
          <img src={user?.avatar} className={Styles.img} alt="..." />
          <div className="card-body p-5">
            <h4 className="pt-3 card-title">{user?.name}</h4>
            <h6 className="pt-3 card-text">City: {user?.city}</h6>
            <h6 className="pt-2 card-text">
              Age: <i>{user?.age}</i>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
