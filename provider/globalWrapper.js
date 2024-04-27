'use client'

import store from "@/store/store"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { StoreProvider } from "easy-peasy"

const GlobalWrapper = ({children})=>{
    const client = new QueryClient()
    return(
        <QueryClientProvider client={client}>

          <StoreProvider store={store}>
            {children}
          </StoreProvider>
        </QueryClientProvider>
    )
}

export default GlobalWrapper