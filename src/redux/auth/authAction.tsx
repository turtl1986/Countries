export const LOGIN='LOGIN'
export const LOGOUT='LOGOUT'

interface LoginAction{
    type: typeof LOGIN,
    payload: string
}

interface logoutAction{
    type: typeof LOGOUT,
  
}

export const loginAction=(user:string):LoginAction=>{
return{
    type : LOGIN,
    payload:user
}
}

export const logoutAction=():logoutAction=>{
    return{
        type : LOGOUT
    }
    }

    export type userAction=LoginAction|logoutAction
