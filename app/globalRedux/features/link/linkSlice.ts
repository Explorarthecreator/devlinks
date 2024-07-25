'use client'

import { createSlice } from "@reduxjs/toolkit"

export interface LinkState {
    links: link[],
    workingLinks:link[],
    loading:boolean
}
interface link {
    id:'',
    url:'',
    userRef:''
    platform:''
}
const initialState : LinkState={
    links:[
        
    ],
    workingLinks:[],
    loading:false
}

export const linkSlice = createSlice({
    name:'link',
    initialState,
    reducers:{
        reset:(state)=>initialState,
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
        },
        updatePlatform:(state,action)=>{
            state.links[action.payload.index].platform = action.payload.plat
        },
        popLink:(state,action)=>{
            state.links.splice(action.payload,1)
        }
    }
})

export const {reset, setLoading, increaseLink, setLinks, setWorkingLinks,updateUrl,updatePlatform, popLink} = linkSlice.actions

export default linkSlice.reducer