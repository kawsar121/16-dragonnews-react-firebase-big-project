import { useContext } from "react";
import { CreateNewContext } from "../AuthContextPoriver/AuthContextPoriver";
import { Navigate } from "react-router-dom";

const Private = ({children}) => {
    const {user, loading} = useContext(CreateNewContext)
    if(loading){
        return <span className="mt-44 loading loading-ring loading-lg"></span>
    }
    if(user){
        return children
    }
    else{
        alert("Please login then see details news")
    }
    return (
        <Navigate to="/auth/login"></Navigate>
    );
};

export default Private;