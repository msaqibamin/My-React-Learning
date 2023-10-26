import { useState } from "react";

function App() {
  const [color, setColor] = useState();

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <h1 className=" bg-slate-700 mt-8 w-[85%] text-white py-3 rounded-full mx-auto text-3xl font-bold text-center">
          BG Color Changer on Click
        </h1>
        <div className="p-3 mt-5 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => setColor("red")}
            className="bg-red-600 font-bold rounded-full text-white px-4"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="bg-green-600 font-bold rounded-full text-white px-4"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-600 font-bold rounded-full text-white px-4"
          >
            blue
          </button>
          <button
            onClick={() => setColor("")}
            className="bg-black font-bold rounded-full text-white px-4"
          >
            Reset Color
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
