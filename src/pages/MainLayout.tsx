import { Outlet } from "react-router-dom";
import { Header } from "../сomponents/Header/header";

export function MainLayout(){
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}