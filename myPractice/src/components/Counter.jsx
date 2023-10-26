import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState("");
  let add = () => {
    if (counter >= 10) {
      setText("Not more then 10");
    } else {
      setCounter(counter + 1);
    }
  };
  let del = () => {
    if (counter <= 0) {
      setText("Negative Values not Allowed.");
    } else {
      setCounter(counter - 1);
    }
  };
  let reset = () => {
    setCounter(0);
    setText("");
  };
  return (
    <>
      <hr className="m-3" />
      <h3 className="text-center text-4xl mb-5 font-bold">Counter App</h3>
      <h2 className="text-center text-xl font-bold">
        Counter value is: {counter}
      </h2>
      <div className="flex justify-center gap-8 m-6">
        <button
          onClick={add}
          className="outline-none bg-black text-white px-5 rounded-full hover:bg-blue-600 duration-300 active:bg-blue-900 hover:text-white"
        >
          Add
        </button>
        <button
          onClick={del}
          className="outline-none bg-black text-white px-5 rounded-full hover:bg-blue-600 duration-300 active:bg-blue-900 hover:text-white"
        >
          Del
        </button>
        <button
          onClick={reset}
          className="outline-none bg-black text-white px-5 rounded-full hover:bg-blue-600 duration-300 active:bg-blue-900 hover:text-white"
        >
          Master Reset
        </button>
      </div>
      <p className="mb-5 text-center text-xl font-bold">{text}</p>
    </>
  );
};

export default Counter;
