import { Store, applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer } from './auth/authReducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { countryReduser } from "./country/reduser"
import { logsTypeActionMiddleware } from "../middleware"

const persistConfig = {
	key: 'root',
	storage
}

const RootState =  combineReducers({
    auth: authReducer,
    country:countryReduser
})

export const persistedReducer = persistReducer(persistConfig, RootState)

export const store:Store=createStore(
    persistedReducer,
   applyMiddleware(logsTypeActionMiddleware,thunk)
)

export const persistor = persistStore(store)

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch