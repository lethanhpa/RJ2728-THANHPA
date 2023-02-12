import React, { useEffect, useState } from "react";

interface IProps {
  setIsLogin: (value: boolean) => void;
}

const Login: React.FC<IProps> = (props) => {
  const { setIsLogin } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {}, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username === "lethanhpa" && password === "lethanhpa") {
      alert("Login successful!!!");
      setIsLogin(true);
    } else {
      alert("Incorrect username or password");
    }
  };
  return (
    <div className="d-flex justify-content-center pt-5 text-success">
      <form className="w-50 border border-3 rounded-3 border-success p-4" onSubmit={handleSubmit}>
        <h1 className="text-center">LOGIN</h1>
        <div className="mb-3">
          <label className="form-label" htmlFor="username">
            Username:
          </label>
          <input
            className="form-control"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="password">
            Password:
          </label>
          <input
            className="form-control"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="pt-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="pt-3 text-center">
          <button className="btn btn-success w-100 p-2 fs-4" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
