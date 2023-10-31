import { combineReducers, Store } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import { authReduser, countriesReducer, countryReducer } from '.'




export const rootReducer=combineReducers({
  auth:authReduser,
  countries:countriesReducer,
  country:countryReducer
})

export const store: Store = configureStore({
  reducer: rootReducer,
  devTools: true,
})

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch