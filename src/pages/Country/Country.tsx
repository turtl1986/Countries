import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "../../сomponents/Card/Card";
import countryStyle from './country.module.css'

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
 const [country, setCountry]=useState<IContry[]>([])

useEffect(()=>{
 fetch(`https://restcountries.com/v3.1/name/${name}`)
 .then(res=>res.json())
 .then(data=>setCountry(data))
 .catch(err=>console.log(err))
},[country])

 return (
  <>
  <div className={countryStyle.container}>
   <button className={countryStyle.country__button} onClick={() => navigate('/countries')}>back</button>
    {country.map((item,index) =><Card key={index} {...item} />)}
</div>
  </>
 );
}
 