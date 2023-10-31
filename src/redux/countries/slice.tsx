import { createSlice } from '@reduxjs/toolkit'
import { IContry } from '../../api/types'
import { fetchCountriesThunk, fetchCountryThunk } from './thunks'

interface CountryState{
    isLoading: boolean
    countries:IContry[]
    error:unknown
}

const initialState:CountryState ={
    isLoading: false,
    countries:[],
    error: ''
}

export const countriesSlice=createSlice({
    name:'countries',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addMatcher(fetchCountriesThunk.pending.match, (state)=>{
            state.isLoading = true
        })
        builder.addMatcher(fetchCountriesThunk.fulfilled.match, (state,action)=>{
            state.isLoading = false
            state.countries = action.payload
        })
        builder.addMatcher(fetchCountriesThunk.rejected.match, (state,action)=>{
            state.isLoading = false
            state.error=action.payload
        })
    }
})

export const countrySlice=createSlice({
    name:'country',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addMatcher(fetchCountryThunk.pending.match, (state)=>{
            state.isLoading = true
        })
        builder.addMatcher(fetchCountryThunk.fulfilled.match, (state,action)=>{
            state.isLoading = false
            state.countries = action.payload
        })
        builder.addMatcher(fetchCountryThunk.rejected.match, (state,action)=>{
            state.isLoading = false
            state.error=action.payload
        })
    }
})