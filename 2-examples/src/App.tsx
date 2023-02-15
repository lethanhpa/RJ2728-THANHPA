import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Slider from "./components/Homeworks/session03/Gallery/Slider";
import Accordions from "./components/Homeworks/session03/Accordions/Accordions";
import Tabbed from "./components/Homeworks/session03/Tabbed/Tabbed";
import ChangeColor from "./components/ex/ChangeColor";
import InfoUser from "./components/ex/InfoUser";
import RateButton from "./components/Homeworks/session03/StarRateButton/StarRateButton";
import CountClass from "./components/ex/CountClass";
import CountFunc from "./components/ex/CountFunc";
import LikeButton from "./components/Homeworks/session03/LikeButton/LikeButton";
import StarRateButton from "./components/Homeworks/session03/StarRateButton/StarRateButton";
import JSX from "./components/examples/JSX";
import anh from "./assets/images/Pa.jpg";
import UserList from "./components/pages/User/List/UserList";
import UserDteail from "./components/pages/User/Detail/UserDteail";
import UserForm from "./components/pages/User/Form/UserForm";
import BaseWebRouter from "./components/pages/User/BaseWebRouter";
import Login from "./components/pages/Auth/Login";
import ImageView from "./components/Homeworks/session03/ImageView/ImageView";
import BlockUI3 from "./components/Homeworks/session02/BlockUI3/BlockUI3";
import Home from "./components/pages/User/Home/Home";
import BlockUI7 from "./components/Homeworks/session02/BlockUI7/BlockUI7";
import BlockUI5 from "./components/Homeworks/session02/BlockUI5/BlockUI5";
import BlockUI2 from "./components/Homeworks/session02/BlockUI2/BlockUI2";
import BlockUI6 from "./components/Homeworks/session02/BlockUI6/BlockUI6";
import BlockUI1 from "./components/Homeworks/session02/BlockUI1/BlockUI1";
import BlockUI4 from "./components/Homeworks/session02/BlockUI4/BlockUI4";

function App() {
  // const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      {/* <JSX/> */}
      {/* <LikeButton/> */}
      {/* <StarRateButton/> */}
      {/* <CountClass/> */}
      {/* <CountFunc/> */}
      {/* <RateButton/> */}
      {/* <ChangeColor/> */}
      {/* <InfoUser/> */}
      {/* <Tabbed/> */}
      {/* <Accordions/> */}
      {/* <Slider/> */}
      {/* <UserDteail/> */}
      {/* <UserList/> */}
      {/* <UserForm/> */}
      {/* <BaseWebRouter/> */}
      {/* <ImageView/> */}
      {/* <BlockUI1 title={"Banwidth"} bgTitle="red" percent={20} bgProcess="orange" />
      <BlockUI1 title={"Storage"} bgTitle="cyan" percent={50} bgProcess="orange" />
      <BlockUI1 title={"Users"} bgTitle="green" percent={70} bgProcess="orange" />
      <BlockUI1 title={"Visitors"} bgTitle="yellow"  percent={30} bgProcess="orange" />
      <BlockUI1 title={"Emails"} bgTitle="purple" percent={45} bgProcess="orange" />
      <BlockUI1 title={"Basic"} bgTitle="magenta" percent={80} bgProcess="orange" />
      <BlockUI1 title={"Others"} bgTitle="blue" percent={37} bgProcess="orange" /> */}
      {/* <BlockUI2/> */}
      {/* <BlockUI3/> */}
      <BlockUI4/>
      {/* <BlockUI5/> */}
      {/* <div className="d-flex">
        <BlockUI6 img={<img src={require("./assets/images/Pa.jpg")} alt="" style={{ maxWidth: "349px", maxHeight: "200px" }} /> } title1="EODEM MODO TYPI" bgButton="#009933"/>
        <BlockUI6 img={<img src={require("./assets/images/Pa.jpg")} alt="" style={{ maxWidth: "349px", maxHeight: "200px" }} /> } title1="SEQUITUR MUTATONEM" bgButton="#009933"/>
        <BlockUI6 img={<img src={require("./assets/images/Pa.jpg")} alt="" style={{ maxWidth: "349px", maxHeight: "200px" }} /> } title1="CONSUETUDIUM LECTORUM" bgButton="#009933"/>
        <BlockUI6 img={<img src={require("./assets/images/Pa.jpg")} alt="" style={{ maxWidth: "349px", maxHeight: "200px" }} /> } title1="PARUM CLARAM" bgButton="#009933"/>
      </div> */}
      {/* <div className="d-flex">
      <BlockUI7 discount="-39%" img={<img src={require("./assets/images/Pa.jpg")} alt="" style={{ maxWidth: "300px", maxHeight: "200px" ,marginLeft: "20px" , marginBottom : "20px"}} /> }  price1="$1.422.7" price2="$1,025.5" price3="18% off" title="LG White Front Load Steam Washer" bgProcess="#ffd11a" percent={90} evaluate="10"/>
      <BlockUI7 discount="-13%" img={<img src={require("./assets/images/Pa.jpg")} alt="" style={{ maxWidth: "300px", maxHeight: "200px" ,marginLeft: "20px" , marginBottom : "20px" }} /> }  price1="$96" price2="$85" price3="18% off" title="Edifier Powered Bookshelf Speakers" bgProcess="#ffd11a" percent={85} evaluate="15"/>
      <BlockUI7 discount="-37%" img={<img src={require("./assets/images/Pa.jpg")} alt="" style={{ maxWidth: "300px", maxHeight: "200px" ,marginLeft: "20px" , marginBottom : "20px" }} /> }  price1="$62.99" price2="$45.9" price3="18% off" title="LG White Front Load Steam Washer" bgProcess="#ffd11a" percent={85} evaluate="20"/>
      </div> */}
      {/* <Home/> */}
      {/* {isLogin ? (
        <BaseWebRouter setIsLogin={setIsLogin} />
      ) : (
        <Login setIsLogin={setIsLogin} />
      )} */}
    </>
  );
}

export default App;
