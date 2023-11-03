import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>You are not a User, Please login First.</div>;

  return (
    <div>
      {" "}
      Welcome! {user.userName}, Your password is {user.userPassword}.
    </div>
  );
}

export default Profile;
