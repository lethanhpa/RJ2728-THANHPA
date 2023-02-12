import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetail from "./Detail/UserDteail";
import UserForm from "./Form/UserForm";
import UserList from "./List/UserList";
import Navigation from "../Auth/Navigation"

interface IProps {
  setIsLogin: (value: boolean) => void;
}

function BaseWebRouter(props: IProps) {
  const { setIsLogin } = props;
  return (
    <>
      <BrowserRouter>
       <Navigation setIsLogin={setIsLogin}/>
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
