import { Link } from "react-router-dom";
import coffee from "../assets/coffee.svg";
import Button from "./button";
const Navbar = () => {
  return (
    <div className="flex justify-around items-center p-5">
      {/* icons */}
      <div className="flex items-center gap-3">
        <img src={coffee} alt="coffe icon" className="h-10" />
        <h1 className="text-xl font-semibold">Buy Me a Coffee</h1>
      </div>
      {/* Some anchors links */}
      <div>
        <ul className="flex gap-10 font-semibold ">
          <li>
            <a href="">About</a>
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
          <Link to={"/login"}>
            <Button title={"LogIn"} />
          </Link>
          <Link to={"/signup"}>
            <Button title={"SignUp"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
