import { Outlet } from "react-router-dom";
import { Header } from '../сomponents/header/header'

export function MainLayout(){
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}