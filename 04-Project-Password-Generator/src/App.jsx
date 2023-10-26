// useCallback Hook ka mtalab hay kay agar option (jo values dependencies array main di gai hain) us main change iata hay to funciton ko run kar kay cache main store ka lo.

// useEffect ka matlab hay kay agar koi bhi option (jo values dependencies array main di gai hain) main chnage hota hay to funciton ko dobara run kar do.

import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*()_{}|?~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, setPassword, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, passwordGenerator, numberAllowed, charAllowed]);

  return (
    <>
      <div className="w-full max-w-lg mx-auto bg-gray-700 my-3 p-5 rounded-xl">
        <h1 className="text-4xl text-center font-bold m-5 rounded-lg py-3 text-white bg-blue-500 w-full max-w-lg mx-auto">
          Password Generator
        </h1>
        <input
          value={password}
          className="p-3 w-full rounded-lg bg-blue-500 text-[20px] outline-none text-white font-semibold "
          type="text"
          placeholder="Password"
          readOnly
        />

        <div className="my-5 flex justify-between gap-3">
          <div>
            <input
              min={8}
              max={100}
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              type="range"
            />
            <label className="text-white font-semibold text-xl">
              Length {length}
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="numberInput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className="text-white font-semibold text-xl">Numbers</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="charInput"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label className="text-white font-semibold text-xl">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
