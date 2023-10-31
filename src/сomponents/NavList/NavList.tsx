import { NavLink } from "react-router-dom"
import navStyles from'./navList.module.css'

export const NavList=()=>{
    return(
        <nav className={navStyles.nav__list}>
         <NavLink className={navStyles.nav__link} to='/'>Home</NavLink>    
         <NavLink className={navStyles.nav__link} to='/countries'>Countries</NavLink>       
 </nav>
    )
}