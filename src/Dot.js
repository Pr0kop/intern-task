import React, { useState } from "react";
import "./Dot.css";

const Dot = ({ id }) => {
  // TODO: put your code here
  const [click, setClick] = useState(false);
  const [color, setColor] = useState("#000");
  const generateColor = () => {
    setColor(Math.random().toString(16).substr(-6));
  };

  return (
    <div
      className="dot"
      style={{
        backgroundColor: "#" + color,
      }}
      onClick={() => {
        setClick(!click);
        generateColor();
      }}
    >
      {click && id}
    </div>
  );
  // function click() {
  //   console.log("here");
  // }
  // console.log(element);
  // // console.log(window);

  // // click();
  // return element;
};
export default Dot;
