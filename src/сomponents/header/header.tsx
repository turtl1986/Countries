import header from './header.module.css'
import moon from '../../assets/icons8-луна-48.png'
import sun from '../../assets/icons8-солнце.svg'
import { useTheme } from '../../context/theme.context'
import { NavLink, useNavigate} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/useRedux'
import { NavList } from '../NavList/NavList'
import { logout } from '../../redux'

export function Header()
{

    const {theme, setTheme}=useTheme()

    const navigate=useNavigate()

    const auth=useAppSelector(state=>state.auth)
    const dispatch=useAppDispatch()

    const handleclick=()=>
    {
      setTheme(!theme)
    }

    const handleLogOut=()=>{
     
        navigate('/countries')
     dispatch(logout())
    }

return(
    <header className={header.container}>
<div className= {header.header}>
<span className={header.header__title}>Where is the world?</span>
  <NavList/>
    <div className={header.header__theme}>
    <img src={theme ? sun : moon} alt="" />
     <button className={header.header__button} onClick={handleclick}>{theme ? 'dark mode':'light mode'}</button>
    </div>
{
  auth.username?
  <button className={header.header__button} onClick={handleLogOut}>logout</button>:
  <button className={header.header__button} onClick={()=>{
    navigate('/login')
  }}>Login</button>
}
    </div>
    </header>
)
}