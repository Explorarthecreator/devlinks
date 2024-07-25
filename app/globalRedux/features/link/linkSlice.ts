'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface LinkState {
    links: object[],
    workingLinks:object[],
    loading:boolean
}

const initialState : LinkState={
    links:[],
    workingLinks:[],
    loading:false
}

export const linkSlice = createSlice({
    name:'link',
    initialState,
    reducers:{
        increaseLink: (state,action)=>{
            state.links.push(action.payload)
            state.loading = true
        },
        setLinks:(state,action)=>{
            state.links = action.payload
        },
        setWorkingLinks:(state,action)=>{
            state.workingLinks =action.payload
        },
        setLoading:(state,action)=>{
            state.loading = action.payload
        },
        updateUrl:(state,action)=>{
            // state.links[action.payload.index] = action.payload.url
            state.links[action.payload.index].url = action.payload.ger
        }
    }
})

export const {setLoading, increaseLink, setLinks, setWorkingLinks,updateUrl} = linkSlice.actions

export default linkSlice.reducer