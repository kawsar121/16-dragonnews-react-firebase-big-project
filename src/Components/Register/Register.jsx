import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CreateNewContext } from "../../AuthContextPoriver/AuthContextPoriver";

const Register = () => {
    const {register,profile} = useContext(CreateNewContext);
    const navigate = useNavigate()
   const handleRegister = (e)=>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)

        register(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset()
            navigate('/')
        })
        .catch(error=>{
            console.log(error.message)
            alert(error.message)
        })
    }
    

    return (
        <div className="card bg-base-100 w-full mx-auto mt-12 max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-5xl font-bold">Register now!</h1>
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
          <p>You have aleready an account <Link to="/auth/login" className="text-red-500">Login</Link></p>
        </div>
    );
};

export default Register;