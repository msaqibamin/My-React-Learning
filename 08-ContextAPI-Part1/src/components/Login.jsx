import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, userPassword });
  };

  return (
    <div>
      <h2>Login Details</h2>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        type="text"
        placeholder="User Name"
      />{" "}
      <br />
      <br />
      <input
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
        type="password"
        placeholder="User Password"
      />{" "}
      <br />
      <br />
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default Login;
