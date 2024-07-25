'use client'

import { configureStore } from "@reduxjs/toolkit"

import authReducer from './features/auth/authSlice'
import linkReducer from './features/link/linkSlice'

export const store = configureStore({
    reducer:{
        auth: authReducer,
        link:linkReducer
    }
})

export type  RootState = ReturnType<typeof store.getState>

export type  AppDispatch = typeof store.dispatch