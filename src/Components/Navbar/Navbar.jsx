import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import users from "../../assets/user.png"
import { use, useContext } from "react";
import { CreateNewContext } from "../../AuthContextPoriver/AuthContextPoriver";

const Navbar = () => {
  const {user,logOut} = useContext(CreateNewContext);
  return (
    <div className="flex items-center justify-between w-11/12 mx-auto mt-14">
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
    </div>
  );
};

export default Navbar;
