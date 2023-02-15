import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserDetail from "./Detail/UserDteail";
import UserForm from "./Form/UserForm";
import Navigation from "../Auth/Navigation"
import Home from "./Home/Home";
import UserList from "./List/UserList";

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
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<UserList />} />
          <Route path="/list/detail/:id" element={<UserDetail />} />
          <Route path="/form" element={<UserForm />} />
          <Route path="/list/form/:id" element={<UserForm />} />
        </Routes>
        {/* <Route path='*' element= {
        <main style={padding: '5px'}}>
          <p>404 Page not found</p>
        </main>
        /> */}
      </BrowserRouter>
    </>
  );
}

export default BaseWebRouter;
