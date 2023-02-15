import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  setIsLogin: (value: boolean) => void;
}

const Navigation = (props: IProps) => {
  const { setIsLogin } = props;
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">Navbar</div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a>
                  <Link className="nav-link active" to={"/"}>
                    List
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a>
                  <Link className="nav-link" to={"/form"}>
                    Form
                  </Link>
                </a>
              </li>
            </ul>
            <form className="d-flex px-2" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            <button
              className="btn btn-danger"
              onClick={() => setIsLogin(false)}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
