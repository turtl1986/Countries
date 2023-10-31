import { createAsyncThunk } from "@reduxjs/toolkit"
import countriesApi from '../../api/countries'
import countryApi from '../../api/country'


export const fetchCountriesThunk=createAsyncThunk(
'countries/fetchCountries',
async ()=>{
const response = await countriesApi.fetchAll()
return response
}
)

export const fetchCountryThunk=createAsyncThunk(
    'country/fetchCountry',
    async (name:string|undefined)=>{
    const response = await countryApi.fetchOne(name)
    return response
    }
    )
