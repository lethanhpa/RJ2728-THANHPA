import React from "react";
import logo from "./logo.svg";
import "./App.css";
import anh from "./assets/images/Pa.jpg";

function App() {
  let styles = {
    width: '100%',
    color: "pink",
    backgroundColor: "white",
    padding: 50
  };
  return (
    <div className="App">
      <header className="App-header">
        <div style={styles}>
          <h1>Tên: Lê Thanh Pa</h1>
          <h2 className="text-success">Ngày sinh: 14/06/2002</h2>
          <p className="text-danger">Quê quán: Quảng Nam</p>
        </div>
        <img style={{width: 500}} src={anh} />
      </header>
    </div>
  );
}

export default App;
