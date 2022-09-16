import {createSlice} from '@reduxjs/toolkit'


export const settingsSlice=createSlice({
    name:'settings',
    initialState:{
        loader:"d-none"
    },
    reducers:{
        ShowLoader:(state,action)=>{
            state.loader='';
        },
        HideLoader:(state,action)=>{
            state.loader='d-none';
        }
    }

})

export default settingsSlice.reducer
export const {ShowLoader,HideLoader}=settingsSlice.actions

