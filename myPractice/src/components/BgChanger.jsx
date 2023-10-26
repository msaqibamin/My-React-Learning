import { useState } from "react";
import React from "react";

const BgChanger = () => {
  const [text, setText] = useState();
  const [color, setColor] = useState();

  return (
    <>
      <h3 className="text-center text-4xl mb-5 font-bold">Color Changer</h3>
      <div
        className="w-[400px] h-[400px] border-2 duration-500 rounded-xl mx-auto "
        style={{ backgroundColor: color }}
      ></div>
      <div className=" flex justify-center items-center gap-3 mt-5">
        <span className="text-[20px] text-blue-600">Color Name: </span>
        <input
          onChange={(e) => {
            setText(e.target.value);
            setColor(e.target.value);
          }}
          className="text-blue-600 border-2 rounded-lg text-[20px] p-[5px] "
          type="text"
          placeholder="Enter You Text"
        />
      </div>
      <p className=" text-center text-orange-500 text-[25px] ">
        Your Required Color is: {text}
      </p>
    </>
  );
};

export default BgChanger;
