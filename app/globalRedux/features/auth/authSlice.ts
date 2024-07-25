'use client'

import { createSlice } from "@reduxjs/toolkit"

// const id = JSON.parse(localStorage.getItem('id')|| 'null')
const id = localStorage.getItem('id')

export interface Authstate{
    value:number,
    logged:boolean,
    id:string,
    loading:boolean
}
const initialState:Authstate= {
    value:2,
    logged: false,
    loading:false,
    id:id?id:''
}

export const authSlice= createSlice({
    name:'auth',
    initialState,
    reducers:{
        increment:(state)=>{
            state.value +=1
        },
        setLoggedIn:(state,action)=>{
            state.logged = action.payload
        },
        setLoading:(state,action)=>{
            state.loading = action.payload
        },
        setId:(state,action)=>{
            state.id = action.payload
            localStorage.setItem('id',action.payload)
        }
    }
})


export const {increment, setLoggedIn, setLoading, setId} = authSlice.actions

export default authSlice.reducer