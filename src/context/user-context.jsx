import { createContext, useState , useEffect ,useReducer } from "react";
import { AuthUserChange , CreateUserDocFromAuth } from "../utils/firebase/firebase";

export const UserContext = createContext({
    currentUser : null,
    SetcurrentUser : () => null
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}

export const UserReducer = (state , action)=>{
    const {type , payload} = action
    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state ,
                currentUser : payload
            }
    
        default:
            throw new Error(`Unhandled this type ${type} in UserReducer`)
    }
}

const INITIAL_STATE = {
    currentUser : null
}

export const Userprovider = ({children}) =>{
    const [state , dispatch ] = useReducer(UserReducer , INITIAL_STATE)
    const { currentUser } = state
    const SetcurrentUser = (user) => {
        dispatch({
            type : USER_ACTION_TYPES.SET_CURRENT_USER ,
            payload : user
        })
    }

    const value = {currentUser}

    useEffect(() => {
        const state = AuthUserChange(user => {
            if(user){
                CreateUserDocFromAuth(user)
            }
            SetcurrentUser(user)
        })
        return state;
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}