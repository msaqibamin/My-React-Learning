import React, { useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    let response = await fetch("http://api.github.com/users/hiteshchoudhary");
    let data = await response.json();
    setData(data);
  };
  fetchData();

  return (
    <>
      <h1 className="font-extrabold text-center text-5xl p-10">
        Github Status
      </h1>
      <div className="p-5 flex-wrap flex gap-10 items-center justify-center">
        <p>ID: {data.id}</p>

        <p>Name: {data.name}</p>
        <p>Followers Count: {data.followers}</p>

        <img
          className="rounded-full h-[100px]"
          src={data.avatar_url}
          alt="Profile Picture"
        />
      </div>
    </>
  );
}

export default Github;
