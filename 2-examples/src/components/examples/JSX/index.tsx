import React from "react";
import "./index.css";

const JSX = () => {
  // window.addEventListener(
  //   "resize",
  //   function () {
  //     console.log(window.innerWidth, window.innerHeight);
  //     let elm = document.getElementById("div__right");
  //     if (elm) {
  //       elm.style.margin = window.innerWidth < 800 ? "auto" : "";
  //     }
  //   },
  //   true
  // );
  return (
    <div>
      <header>
        <h1>The Pulpit Rock</h1>
      </header>
      <div style={{ display: "flex" }}>
        <div className="div__left">
          <div className="div__content__left">The Drive</div>
          <div className="div__content__left">The Walk</div>
          <div className="div__content__left">The Return</div>
          <div className="div__content__left">The End</div>
        </div>
        <div className="div__mid">
          <h1>The Walk</h1>
          <p>
            The walk to the Pulpit Rock will take you approximately two hours,
            give or take an hour depending on the weather conditions and your
            physical shape.
          </p>
          <img
            className="anh"
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
            alt="thewalk"
          />
        </div>
        <div className="div__right">
          <div className="div__content__right">
            <div>
              <h2>What?</h2>
              <p>
                The Pulpit Rock is a part of a mountain that looks like a
                pulpit.
              </p>
            </div>
            <div>
              <h2>Where?</h2>
              <p>The Pulpit Rock is in Norway</p>
            </div>
            <div>
              <h2>Price?</h2>
              <p>The walk is free!</p>
            </div>
          </div>
        </div>
      </div>
      <div className="div__footer">
        <footer>
          This web page is a part of a demonstration of fluid web design made by
          www.w3schools.com. Resize the browser window to see the content
          response to the resizing.
        </footer>
      </div>
    </div>
  );
};
export default JSX;
