import {LOGIN,LOGOUT,userAction } from './authAction'

interface IAuthState{
    user:string
}


const authState:IAuthState={
    user:''
}

export const authReducer = (state=authState,action:userAction):IAuthState => {
switch(action.type) {
    case LOGIN:return{
        ...state,
        user:action.payload
    }
    case LOGOUT:
        return{  
        ...state,
        user: ''
    }
        default:return state
}
}