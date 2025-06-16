import { CgProfile } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import user from "../../assets/user.png"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-11/12 mx-auto mt-14">
        <div> </div>
      <div className="flex gap-9 font-bold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-2">
        <img src={user} alt="" srcset="" />
        <button className="bg-gray-800 px-5 py-2">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
