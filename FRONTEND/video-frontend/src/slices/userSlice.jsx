import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:[]
};

export const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            const user={
                name:"ashish",
            }
            state.user.push(addUser)
        } ,
        
    }
})