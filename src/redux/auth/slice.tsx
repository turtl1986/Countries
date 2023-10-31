import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IAuthState {
    username: string
}

const initialState: IAuthState = {
    username: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<string>) {
            state.username = action.payload
        },
        logout() {
            return initialState
        }
    }
})