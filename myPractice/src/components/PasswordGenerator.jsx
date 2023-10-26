import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [numberAll, setNumberAll] = useState(false);
  const [charAll, setCharAll] = useState(false);
  const [password, setPassword] = useState("");

  let randomPassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAll) str += "0123456789";
    if (charAll) str += "~!@#$%^&*()_-{}][/`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAll, charAll, setPassword]);

  useEffect(() => {
    randomPassword();
  }, [length, charAll, numberAll, randomPassword]);

  return (
    <>
      <hr className="m-5" />
      <p className="w-full max-w-lg mx-auto">
        "useCallback" Hook ko ham use kartay hain agar hamain kisi funciton ka
        Cache main store karna hota hay. Jo dependicies bhi ham add kartay hain
        to un main agar koi bhi change iay to function ko cache say load kar
        deta hay.
      </p>
      <p className="w-full max-w-lg mx-auto">
        "useEffect" Hook ko ham use kartay hain agar hamain kisi bhi funciton ko
        bar bar run karna ho to us main ham use kartay hain. jo dependicies ham
        nay add ki hain wo agar call hoti hain to ham function ko run kar detay
        hain.
      </p>
      <div className="w-full max-w-lg mx-auto bg-gray-700 my-3 p-5 rounded-xl">
        <h1 className="text-4xl text-center font-bold m-5 rounded-lg py-3 text-white bg-blue-500 w-full max-w-lg mx-auto">
          Password Generator
        </h1>
        <div className="flex mb-4 rounded-lg overflow-hidden ">
          <input
            value={password}
            readOnly
            className="w-full outline-none py-1 px-3 text-[18px] font-medium text-blue-500"
            placeholder="Password"
            type="text"
          />
          {/* <button className="bg-blue-500 font-semibold outline-none text-white px-3 py-0.5 shrink-0 ">
            Copy
          </button> */}
        </div>
        <div className="flex justify-between text-white text-xl">
          <div className="space-x-2">
            <input
              value={length}
              onChange={(e) => setLength(e.target.value)}
              min={8}
              max={50}
              type="range"
            />
            <label className="font-semibold">Length-{length}</label>
          </div>
          <div className="space-x-2">
            <input
              onChange={() => setNumberAll((prev) => !prev)}
              type="checkbox"
            />
            <label className="font-semibold">Numbers</label>
          </div>
          <div className="space-x-2">
            <input
              onChange={() => setCharAll((prev) => !prev)}
              type="checkbox"
            />
            <label className="font-semibold">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
