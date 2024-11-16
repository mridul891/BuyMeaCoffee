import Blog from "./Blog";
import Navbar from "./Navbar";

const Landing = () => {
  return (
    <div className="w-screen h-screen   overflow-hidden">
      <Navbar />
      <Blog />
    </div>
  );
};

export default Landing;
