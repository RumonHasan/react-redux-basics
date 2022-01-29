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
            const hobbyId = action.payload.newHobbyId;
            state.value.hobbies.push({hobby: newHobby, id: hobbyId});
        },
        deleteHobby:(state,action)=>{
            const id = action.payload;
            const newHobbies = state.value.hobbies?.filter((hobby)=> hobby.id !== id);
            state.value.hobbies.push(newHobbies);
        }
    }
});

export const themeReducer = createSlice({
    name:'themeReducer',
})

// passing on reducer actions 
export const {addUser, addHobby, deleteHobby} = userReducer.actions;
export default userReducer.reducer;