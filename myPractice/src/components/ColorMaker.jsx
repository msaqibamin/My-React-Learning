import { useEffect, useState } from "react";
import React from "react";

const ColorMaker = () => {
  const [color, setColor] = useState(0);
  const [redColor, setRed] = useState(0);
  const [greenColor, setGreen] = useState(0);
  const [blueColor, setBlue] = useState(0);
  const [alphaColor, setAlphaColor] = useState(0);

  useEffect(() => {
    // let red = redColor;
    // let green = greenColor;
    // let blue = blueColor;
    // let alpha = alphaColor / 100;
    let finalColor = `rgba(${redColor},${greenColor},${blueColor},${
      alphaColor / 100
    })`;
    setColor(finalColor);
  }, [redColor, greenColor, blueColor, alphaColor, setColor]);
  return (
    <>
      <hr className="m-5" />
      <p className="w-full max-w-lg mx-auto">
        Function ko banaya useEffect kay sath takay value agar change ho to
        function automatically run ho jiay.
      </p>

      <div className=" flex-wrap bg-gray-900 rounded-xl m-2 p-4 flex justify-center items-center flex-col w-full max-w-lg mx-auto">
        <h1 className="text-4xl text-white mb-4 font-bold">
          Color Generator (RGBA)
        </h1>

        <div
          style={{ backgroundColor: color }}
          className="w-[300px] h-[300px] border-2 border-white rounded-xl bg-black"
        ></div>
        <div className="flex w-[300px] justify-center items-center border-2 p-2 rounded-xl mt-4 gap-3 flex-col">
          <div className="flex items-center space-x-2">
            <label className="text-white font-bold">RED: ({redColor})</label>
            <input
              onChange={(e) => {
                setRed(e.target.value);
              }}
              min={0}
              max={255}
              type="range"
            />
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-white font-bold">
              Green: ({greenColor})
            </label>
            <input
              onChange={(e) => {
                setGreen(e.target.value);
              }}
              min={0}
              max={255}
              type="range"
            />
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-white font-bold">Blue: ({blueColor})</label>
            <input
              onChange={(e) => {
                setBlue(e.target.value);
              }}
              min={0}
              max={255}
              type="range"
            />
          </div>
          <div className="flex items-center space-x-2">
            <label className="text-white font-bold">
              Alpha: ({alphaColor})
            </label>
            <input
              onChange={(e) => {
                setAlphaColor(e.target.value);
              }}
              min={0}
              max={100}
              type="range"
            />
          </div>
        </div>
        <p className="text-white mt-3 text-2xl font-bold">
          Color Name:{" "}
          {`rgba(${redColor},${greenColor},${blueColor},(${alphaColor}%))`}
        </p>
      </div>
    </>
  );
};

export default ColorMaker;
