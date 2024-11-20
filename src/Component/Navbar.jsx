import { Link } from "react-router-dom";
import coffee from "../assets/coffee.svg";
import Button from "./button";
import { useState } from "react";
import Avatar from "./Avatar";


const Navbar = () => {
  const [signedIn, setSignedIn] = useState(true);
  return (
    <div className="flex justify-around items-center p-5">
      {/* icons */}
      <Link to="/">
        <div className="flex items-center gap-3">
          <img src={coffee} alt="coffe_icon" className="h-10" />
          <h1 className="text-sm lg:text-xl font-semibold ">Buy Me a Coffee</h1>
        </div>
      </Link>
      {/* Some anchors links */}
      <div className="hidden md:block">
        <ul className="flex gap-10 font-semibold ">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
      {/* Buttons */}
      <div>
        <div className="flex gap-4">
          {signedIn ? (
            <div>
              <Avatar />
            </div>
          ) : (
            <div>
              <Link to={"/signin"}>
                <Button title={"LogIn"} />
              </Link>
              <Link to={"/signup"}>
                <Button title={"SignUp"} />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
