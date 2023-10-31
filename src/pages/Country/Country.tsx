import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "../../сomponents/Card/Card";
import countryStyle from './country.module.css'
import { useAppDispatch, useAppSelector } from "../../redux/useRedux";
import { ICountries } from "../../api/interface/countries";
import { FetchCountriesThunk } from "../../redux/country/action";
import { URL_COUNTRY } from "../../api/api/URL/URL";

interface IContry{
    name: {
        common: string
        official: string
        nativeName: {
            fra:{
                common: string
                official: string
            }
        }
    }
    capital: []
    region: string
    population: number
    flags: {
        png:string
        svg:string
        alt:string
    }
}

export const Country = () => {
 const { name } = useParams();
 const navigate = useNavigate();

 const dispatch=useAppDispatch()

 const {countries}=useAppSelector(state=>state.country)


useEffect(()=>{
dispatch(FetchCountriesThunk(URL_COUNTRY+`${name}`))
},[dispatch])
 return (
  <>
  <div className={countryStyle.container}>
   <button className={countryStyle.country__button} onClick={() => navigate('/countries')}>back</button>
    {countries.map((country:ICountries) =><Card key={country.name.common} {...country} />)}
</div>
  </>
 );
}
 