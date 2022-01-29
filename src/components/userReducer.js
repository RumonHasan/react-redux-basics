import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

// default user values 
const initialUserValues = {
    name: '',
    age: undefined,
    location: '',
    hobbies: []
}
// user reducer
export const userReducer = createSlice({
    name:'userReducer',
    initialState: 
    {
        value: initialUserValues
    },
    // all the reducer actions
    reducers: {
        addUser: (state, action)=>{
            state.value = action.payload
        },
        // basic adding reducer
        addHobby: (state, action)=>{
            const newHobby = action.payload.newHobby;
            state.value.hobbies.push(newHobby);
        }
    }
});

export const themeReducer = createSlice({
    name:'themeReducer',
})

// passing on reducer actions 
export const {addUser, addHobby} = userReducer.actions;
export default userReducer.reducer;