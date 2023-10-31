import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux"
import {RootState} from './store'
import { ThunkDispatch } from "redux-thunk"
import { AppAction } from "./types"

export const useAppDispatch = useDispatch<ThunkDispatch<RootState,void,AppAction>>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore=useStore<RootState>