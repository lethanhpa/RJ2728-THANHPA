import React, { useState } from "react";

type Props = {};

const ChangeColor = (props: Props) => {
  const [colorState, setColorState] = useState<string>("black");

  const handleChangeRed = () => {
    setColorState("red");
    console.log("red");
  };
  const handleChangeBlue = () => {
    setColorState("blue");
    console.log("blue");
  };
  return (
    <>
      <div style={{ color: colorState }}>ChangeColor</div>
      <button onClick={handleChangeRed} disabled={colorState === "red"}>
        Red
      </button>
      <button onClick={handleChangeBlue} disabled={colorState === "blue"}>
        Blue
      </button>
    </>
  );
};

export default ChangeColor;
