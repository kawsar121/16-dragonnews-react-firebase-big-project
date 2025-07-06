import moment from "moment";
import logo from "../../assets/logo.png";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" w-11/12 mx-auto">
      <div className="flex justify-center">
        <img src={logo} alt="" srcset="" />
      </div>
      <div className="mt-4">{moment().format("MMMM Do YYYY")}</div>
      <div className="flex gap-2 mt-8">
        <div className="bg-red-500 px-2 py-1 font-mono font-bold flex items-center ">
            <Link to="/">Latest</Link>
        </div>
        <Marquee className="bg-gray-600 text-black lg:p-4 sm:px-5">
            <p>Kawsar are working to create this page.</p>
            <p>Website name The Dragon News</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quam.</p>
        </Marquee>
      </div>
    </div>
  );
};

export default Header;
