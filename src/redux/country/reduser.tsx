import { ICountries } from "../../api/interface/countries"
import{FETCH_COUNTRIES,FETCH_COUNTRIES_SUCCESS,FETCH_COUNTRIES_ERROR, CountryAction} from './action'

interface CountryState{
    isLoading: boolean
    countries:ICountries[]
    error:unknown
}

const countryState:CountryState ={
    isLoading: false,
    countries:[],
    error: ''
}

export const countryReduser=(state=countryState,action:CountryAction):CountryState=>{
switch(action.type){
    case FETCH_COUNTRIES:return{
...state,
isLoading: true
    }
    case FETCH_COUNTRIES_SUCCESS:return{
        ...state,
        isLoading: false,
        countries: action.payload
        
    }
    case FETCH_COUNTRIES_ERROR:return{
       ...state,
       error: action.payload
    }
    default:return state
}
}