import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from "react-redux"
import {RootState} from './store'
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit"

export const useAppDispatch = useDispatch<ThunkDispatch<RootState,void,AnyAction>>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore=useStore<RootState>