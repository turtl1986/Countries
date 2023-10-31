import { ChangeEvent, useEffect, useState } from "react"
import { Card } from "../Card/Card"
import mainStyle from './wrapper.module.css'
import searchIcon from '../../assets/icons8-поиск.svg'
import { IContry } from "../../api/types"
import { useAppDispatch, useAppSelector } from "../../redux/useRedux"
import { fetchCountriesThunk } from "../../redux/countries/thunks"


export function Wrapper(){

    
    const [search, setSearch]=useState('')

    const dispatch=useAppDispatch()
    const {countries}=useAppSelector(state=>state.countries)

   useEffect(()=>{
   dispatch(fetchCountriesThunk())
   },[dispatch])

  const handleSearch=(event:ChangeEvent<HTMLInputElement>)=>
  {
   setSearch(event.target.value)
  }

  const countriesSearch=countries.filter((country: { name: { common: string }; region: string })=>{
    return (
        country.name.common.toLowerCase().includes(search.toLowerCase())
        ||
        country.region.toLowerCase().includes(search.toLowerCase())
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
    { countriesSearch.map((country:IContry) =><Card key={country.name.common} {...country} />)}
</div>
    </div>
  
)
}