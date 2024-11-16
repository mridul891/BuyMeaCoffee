import React from "react";
import Button from "./button";

const Blog = () => {
  return (
    <div className=" w-screen h-full flex flex-col gap-10 justify-center lg:justify-center items-center">
      <div >
        <h1 className="text-[3rem] md:text-[8rem] font-bold leading-none ">
          Fund Your <br></br> Creative Work
        </h1>
        <p className="text-2xl text-center text-gray-500 mt-5">
          Accept support for your work <br></br> It&apos;s easire than your work
        </p>
      </div>
      <Button title={"Start My page"} />
    </div>
  );
};

export default Blog;
