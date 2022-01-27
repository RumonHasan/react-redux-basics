import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "users",
    initialState: {
        value: []
    },
    reducers :{
        addUser: (state,action) =>{
            
        }
    }
})

const Users = () => {
  return <div></div>;
};

export default Users;