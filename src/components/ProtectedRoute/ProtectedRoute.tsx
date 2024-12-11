import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../store";


const ProtectedRoute:React.FC = ()=>{
    
    const isAuthenticiate = useSelector((store:RootState)=>store.auth.isAuthenticiate)

    if(!isAuthenticiate)
        return <Navigate to={"/login"} replace/>
    
    return <Outlet/>
}

export default ProtectedRoute