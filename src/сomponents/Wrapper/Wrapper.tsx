import { ChangeEvent, useEffect, useState } from "react"
import { Card } from "../Card/Card"
import mainStyle from './wrapper.module.css'
import searchIcon from '../../assets/icons8-поиск.svg'

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

export function Wrapper(){

    const [country, setCountry]=useState<IContry[]>([])
    const [search, setSearch]=useState('')

   useEffect(()=>{
    fetch(' https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region')
    .then(res=>res.json())
    .then(data=>setCountry(data))
    .catch(err=>console.log(err))
   },[country])

  const handleSearch=(event:ChangeEvent<HTMLInputElement>)=>
  {
   setSearch(event.target.value)
  }

  const countriesSearch=country.filter(item=>{
    return (
        item.name.common.toLowerCase().includes(search.toLowerCase())
        ||
        item.region.toLowerCase().includes(search.toLowerCase())
    )
})

return(
    <div className={mainStyle.container}>
      <div className={mainStyle.nav}>
    <div className={mainStyle.nav__search}>
    <img className={mainStyle.nav__img} src={searchIcon} alt="" />
    <input className={mainStyle.nav__input} type="search" placeholder="Switch for a country.." value={search}  onChange={handleSearch}/>
    </div>
</div>
<div className={mainStyle.wrapper}>
    {countriesSearch.map((item,index) =><Card key={index} {...item} />)}
</div>
    </div>
  
)
}