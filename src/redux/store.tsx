import { combineReducers, createStore } from "redux";
import { authReducer } from './authReducer'

export const store=createStore(
    combineReducers({
        auth: authReducer
    }),
)

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch