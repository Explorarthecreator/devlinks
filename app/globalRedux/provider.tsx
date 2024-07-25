'use client'

import { ReactNode } from "react";
import { Provider } from "react-redux"
import { store } from "./store"

interface ProvidersProps {
    children: ReactNode; // Explicitly type the children prop
  }

export function Providers({children}:ProvidersProps){
    return(
        <Provider store={store}>
            {
                children
            }
        </Provider>
    )
}