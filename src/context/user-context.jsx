import { createContext, useState , useEffect } from "react";
import { AuthUserChange , CreateUserDocFromAuth } from "../utils/firebase/firebase";

export const UserContext = createContext({
    currentUser : null,
    SetcurrentUser : () => null
})

export const Userprovider = ({children}) =>{
    const [currentUser , SetcurrentUser] = useState(null)
    const value = {currentUser,SetcurrentUser}
    useEffect(() => {
        const state = AuthUserChange(user => {
            console.log(user)
            if(user){
                CreateUserDocFromAuth(user)
            }

            SetcurrentUser(user)
        })
        return state;
    },[])
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}