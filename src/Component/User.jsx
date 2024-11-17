import React from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/c4.png";
const User = () => {
  const { id } = useParams();
  return (
    <div className="flex justify-center items-center border-2 border-lime-900">
      <div className="flex gap-5">
        <div className="bg-black rounded-lg">
          <img src={logo} alt="" className="h-[10rem]" />
        </div>
        <h1>{id}</h1>
      </div>
    </div>
  );
};

export default User;
