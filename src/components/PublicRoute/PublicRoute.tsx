import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { RootState } from "../../store"


const PublicRoute:React.FC = ()=>{
    const isAuthenticiate = useSelector((stroe:RootState)=>stroe.auth.isAuthenticiate)

    if(isAuthenticiate)
        return <Navigate to={"/"} replace/>

    return <Outlet/>
}

export default PublicRoute