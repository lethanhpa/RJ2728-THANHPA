import React from "react";
import BlockUI1 from "../BlockUI1/BlockUI1";

function Session02() {
  return (
    <>
      <BlockUI1 title={"BANWIDTH"} bgTitle={"blue"} bgProcess={"red"} percent={20}/>
      <BlockUI1 title={"STORAGE"} bgTitle={"green"} bgProcess={"brown"} percent={50}/>
      <BlockUI1 title={"USERS"} bgTitle={"pink"} bgProcess={"orange"} percent={70}/>
      <BlockUI1 title={"VISITORS"} bgTitle={"purple"} bgProcess={"gray"} percent={30}/>
      <BlockUI1 title={"EMAILS"} bgTitle={"blue"} bgProcess={"red"} percent={45}/>
      <BlockUI1 title={"BASIC"} bgTitle={"blue"} bgProcess={"red"} percent={80}/>
      <BlockUI1 title={"OTHERS"} bgTitle={"blue"} bgProcess={"red"} percent={37}/>
    </>
  );
}

export default Session02;