import { createUserWithEmailAndPassword, onAuthStateChanged,updateProfile ,signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.init";

export const CreateNewContext = createContext(null)
const AuthContextPoriver = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoding] = useState(true);
    console.log(user)
            // Create user
    const register = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
        setLoding(true)
    }


        //Set A Obserber for collect data
    useEffect(()=>{
        const collectData = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoding(false)
    })
        return()=>{
            collectData()
        }
    },[]);


        //Login User
    const login = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
        setLoding(true)
    }

        //LogOut user
    const logOut = ()=>{
       return signOut(auth)
    }
        
        //Update Profile
    const userUpdate = (update) =>{
        return updateProfile(auth.currentUser, update)
    }


    const info ={
        register,
        login,
        logOut,
        user,
        loading,

        userUpdate
    }
    return (
        <CreateNewContext.Provider value={info}>
            {children}
        </CreateNewContext.Provider>
    );
};

export default AuthContextPoriver;