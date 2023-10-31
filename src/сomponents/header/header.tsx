import header from './header.module.css'
import moon from '../../assets/icons8-луна-48.png'
import sun from '../../assets/icons8-солнце.svg'
import { useTheme } from '../../context/theme.context'
import { NavLink, useNavigate} from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/useRedux'
import { logoutAction } from '../../redux/auth/authAction'
import { NavList } from '../NavList/NavList'

export function Header()
{

    const {theme,changeTheme}=useTheme()

    const navigate=useNavigate()
    const auth=useAppSelector(state=>state.auth)
    const dispatch=useAppDispatch()

    const handleclick=()=>
    {
      changeTheme()
    }

    const handleLogOut=()=>{
     
        navigate('/countries')
     dispatch(logoutAction())
    }

return(
    <header className={header.container}>
<div className= {header.header}>
<span className={header.header__title}>Where is the world?</span>
  <NavList/>
    <div className={header.header__theme}>
    <img onClick={handleclick} src={theme==='light' ? sun : moon} alt="" />
    </div>
{
  auth.user?
  <button className={header.header__button} onClick={handleLogOut}>logout</button>:
  <button className={header.header__button} onClick={()=>{
    navigate('/login')
  }}>Login</button>
}
    </div>
    </header>
)
}