import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "../../сomponents/Card/Card";
import countryStyle from './country.module.css'
import { IContry } from "../../api/types";
import { useAppDispatch, useAppSelector } from "../../redux/useRedux";
import { fetchCountryThunk } from "../../redux/countries/thunks";



export const Country = () => {
 const { name } = useParams();
 const navigate = useNavigate();
 const dispatch=useAppDispatch()
 const {countries}=useAppSelector(state=>state.country)

useEffect(()=>{
dispatch(fetchCountryThunk(name))
},[dispatch])

 return (
  <>
  <div className={countryStyle.container}>
   <button className={countryStyle.country__button} onClick={() => navigate('/countries')}>back</button>
    {countries.map((item:IContry) =><Card key={item.name.common} {...item} />)}
</div>
  </>
 );
}
 