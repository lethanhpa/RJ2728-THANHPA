import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserDetail from "./Detail/UserDteail";
import UserForm from "./Form/UserForm";
import UserList from "./List/UserList";

function BaseWebRouter() {
  return (
    <>
      <BrowserRouter>
        <Link to={"/"}>List | </Link>
        <Link to={"/form"}>Form</Link>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/detail/:id" element={<UserDetail />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/form/:id" element={<UserForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default BaseWebRouter;
