import { createSlice } from "@reduxjs/toolkit"


const INITIAL_STATE = {
    currentUser : null
}

export const userSlice = createSlice({
    name : 'user',
    initialState : INITIAL_STATE ,
    reducers : {
        SetcurrentUser : (state , action)=>{
            state.currentUser = action.payload
        }
    }
})

export const { SetcurrentUser } = userSlice.actions

export const UserReducer = userSlice.reducer