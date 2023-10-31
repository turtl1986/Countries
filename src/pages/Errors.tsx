import { useNavigate } from "react-router-dom"

export function Erorr(){
    const navigate=useNavigate()
    return(
        <>
        <button type="button" onClick={()=>navigate(-1)}>back</button>
        Error</>
    )
}