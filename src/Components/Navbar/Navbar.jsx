import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import users from "../../assets/user.png"
import { use, useContext } from "react";
import { CreateNewContext } from "../../AuthContextPoriver/AuthContextPoriver";

const Navbar = () => {
  const navli = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
  </>
  const {user,logOut} = useContext(CreateNewContext);
  return (<>
    {/* <div className="flex items-center justify-between mt-14">
        <div> </div>
      <div className="flex gap-9 font-bold">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-2 ">
        
        <div className="flex justify-center">
          {
          user ? <div><img className="w-10 rounded-full" src={user.photoURL}  alt="" srcset="" /> <p>{user.displayName}</p> </div> : <div><img src={users} alt="" srcset="" /></div>
        }
        </div>
        {
          user? <div> <button  className="btn btn-primary" onClick={logOut}>LogOut</button> </div> : <Link to="/auth/login" className="bg-gray-800 px-5 py-2">Login</Link>
        }
        
      </div>
    </div> */}











<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navli}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Dragon News</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navli}
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex items-center gap-2 ">
        {
          user? <div> <button  className="btn btn-primary" onClick={logOut}>LogOut</button> </div> : <Link to="/auth/login" className="bg-gray-800 px-5 py-2">Login</Link>
        }
        
      </div>
  </div>
</div>


</>
  );
};

export default Navbar;
