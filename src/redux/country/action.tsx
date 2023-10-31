import axios from "axios"
import { ICountries } from "../../api/interface/countries"
import { Dispatch } from "react"
import { URL_BASE } from "../../api/api/URL/URL"
import { ThunkAction } from "redux-thunk"
import { RootState } from "../store"

export const FETCH_COUNTRIES='FETCH_COUNTRIES'
export const FETCH_COUNTRIES_SUCCESS='FETCH_COUNTRIES_SUCCESS'
export const FETCH_COUNTRIES_ERROR='FETCH_COUNTRIES_ERROR'

interface FetchCountries{
    type:typeof FETCH_COUNTRIES
}

interface FetchCountriesSuccess{
    type:typeof FETCH_COUNTRIES_SUCCESS
    payload:ICountries[]
}

interface FetchCountriesError{
    type:typeof FETCH_COUNTRIES_ERROR
    payload:unknown
}

export const FetchCountriesThunk=(URL:string):ThunkAction<
void,
RootState,
void,
CountryAction>=>{
return async(dispatch:Dispatch<CountryAction>)=>{
    dispatch({type: FETCH_COUNTRIES})
    try{
const {data}=await axios.get(URL)
dispatch({type: FETCH_COUNTRIES_SUCCESS, payload:data})
    }
    catch(error){
    const err=error as Error
    dispatch({type: FETCH_COUNTRIES_ERROR, payload:err.message})
    }
}
}

export type CountryAction =FetchCountries|FetchCountriesSuccess|FetchCountriesError
