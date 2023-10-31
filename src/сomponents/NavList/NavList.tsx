import { NavLink } from "react-router-dom"
import navStyles from'./navList.module.css'

export const NavList=()=>{
    return(
        <ul className={navStyles.nav__list}>
       <li className={navStyles.nav__item}>
         <NavLink className={navStyles.nav__link} to='/'>Home</NavLink>    
       </li>
       <li className={navStyles.nav__item}>
         <NavLink className={navStyles.nav__link} to='/countries'>Countries</NavLink>       
       </li>
 </ul>
    )
}