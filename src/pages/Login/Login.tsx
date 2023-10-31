import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../redux/useRedux"
import { loginAction } from "../../redux/authAction"
import formStyle from './login.module.css'


export function Login()
{
const auth=useAppSelector(state=>state.auth)
const dispatch=useAppDispatch()
const navigation=useNavigate()

const handleSubmit=(event:React.FormEvent<HTMLFormElement>)=>{
event.preventDefault()
const formData = new FormData(event.currentTarget)
const userName = formData.get('userName')?.toString()
if(userName){
        navigation('/countries',{replace:true})
        dispatch(loginAction(userName))
    }
}
    return(
        <div className={formStyle.container}>
        <form className={formStyle.form} onSubmit={handleSubmit}>
        <label className={formStyle.form__label} htmlFor="userName">Enter name</label>
        <input className={formStyle.form__input} type="text" placeholder="Enter name" name="userName" id="userName"/>
      
        <button className={formStyle.form__button} type="submit">Login</button>
    </form>
    </div>
    )
}