import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useAppSelector } from "../redux/useRedux"


export function PrivateRouter(){
    const auth=useAppSelector(state=>state.auth)
    const location=useLocation()
    if(auth.username === ''){
        return(
<Navigate to='/login' state={{from:location}} replace/>
        )
        
    }
    return(
<Outlet/>
    )
}