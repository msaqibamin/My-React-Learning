import { useParams } from "react-router-dom";
import React from "react";

function User() {
  const { id } = useParams();

  return (
    <div className="text-center text-4xl font-bold my-10 text-orange-700">
      User: {id}
    </div>
  );
}

export default User;
