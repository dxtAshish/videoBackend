import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:[]
};

export const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,action)=>{      
            state.user.push(action.payload)
        } ,       
    }
})
