
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreateNewContext } from "../../AuthContextPoriver/AuthContextPoriver";

const Login = () => {
  const navigate = useNavigate()
    const {login} = useContext(CreateNewContext);
    const[errors, setErrors] = useState()
    const handleLogin = (e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)

        login(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset()
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message)
            setErrors(error.message)
        })
    }
  return (
        <div className="card bg-base-100 w-full mx-auto mt-12 max-w-sm shrink-0 shadow-2xl">
            <p className="text-red-600">{errors}</p>
            <h1 className="text-5xl font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <input
                type="Email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p>You have aleready no account <Link to="/auth/register" className="text-red-500">Register</Link></p>
          
        </div>
  );
};

export default Login;
