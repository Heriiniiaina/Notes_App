import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState, store } from "../../store";
import User from "../../store/note/auth-slice";

const ProtectedRoute:React.FC = ()=>{
    const user = useSelector((store:RootState)=>store.auth.user)
    const isAuthenticiate = useSelector((store:RootState)=>store.auth.isAuthenticiate)

    if(!isAuthenticiate)
        return <Navigate to={"/login"} replace/>
    
    return <Outlet/>
}

export default ProtectedRoute