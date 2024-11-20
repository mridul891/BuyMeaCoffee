import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../assets/c4.png";
import coffeeLogo from "../assets/coffee.svg";
import toast from "react-hot-toast";
const User = () => {
  const { id } = useParams();
  const [coffee, setCoffee] = useState(1);
  const [result, setResult] = useState(5);

  useEffect(() => {
    setResult(coffee * 5);
  }, [coffee]);

  const startPayment = () => {
    try {
      if (!window.ethereum) {
        return toast.error("Please install metamask");
      }

      toast.success("You have installed metamast");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-col gap-10 justify-center items-center h-screen bg-[#fffada] ">
      <div className=" flex flex-col gap-10 ">
        {/* Header Component */}
        <div className="flex gap-5 p-5 items-center justify-center bg-white rounded-2xl">
          <div className="rounded-full border-2 overflow-hidden border-black">
            <img src={logo} alt="avatar_image" className="h-[10rem] " />
          </div>
          <div className="flex justify-center items-center ">
            <img src={coffeeLogo} alt="coffee_image" className="h-10" />
            <h1 className="font-bold text-2xl ml-2">/{id}</h1>
          </div>
        </div>
        {/* donation form and other infos */}

        <div className="grid grid-cols-2 gap-10 ">
          {/* left div */}
          <div className="bg-white p-5 rounder-xl">
            {/* about */}
            <div className="">
              <h1 className="text-xl font-bold uppercase">About {id}</h1>
              <p className="text-lg mt-1">Test info</p>
            </div>
            <hr className="h-[2px] bg-gray-200 my-2" />
            {/* recent supporters */}
            <div className="">
              <h1 className="text-xl font-bold uppercase">Recent Supporters</h1>
              <p>test supporters </p>
            </div>
          </div>
          {/* right div */}
          <div className=" bg-white h-96 p-4 rounded-lg">
            {/* donation form  */}
            <div className=" flex flex-col gap-3 justify-evenly h-full p-3">
              {/* coffee */}
              <div className="bg-[#FEFCEF] p-2 border-2 border-yellow-300 rounded-lg">
                <div className="flex gap-5 items-center ">
                  <div>
                    <i className="fa-solid fa-mug-saucer"> </i>
                    <span className="font-bold text ml-2">X</span>
                  </div>
                  <button
                    onClick={() => setCoffee(1)}
                    className=" px-4 py-2 rounded-full border border-yellow-500"
                  >
                    1
                  </button>
                  <button onClick={() => setCoffee(2)}>2</button>
                  <button onClick={() => setCoffee(5)}>5</button>
                  <input
                    type="number"
                    name="Coffee"
                    onChange={(e) => setCoffee(e.target.value)}
                    className="w-10 h-10 rounded-lg bg-white border-2 border-yellow-200 p-2  "
                  />
                </div>
              </div>
              {/* name and message */}

              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  className="h-10 rounded-lg px-2 border"
                  placeholder="Your Name"
                />
                <textarea
                  className="h-20 text-start px-2 py-2 rounded-lg border"
                  placeholder="Say something"
                />
              </div>
              {/* transaction */}
              <div></div>
              {/* button */}
              <button
                className="bg-yellow-400 rounded-lg px-5 py-2"
                onClick={startPayment}
              >
                Support ${result}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
