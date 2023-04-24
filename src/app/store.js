import { configureStore } from '@reduxjs/toolkit'

import searchTermSlice from '../features/searchTermSlice'




export const store = configureStore({
  reducer: {
    
    searchTerm:searchTermSlice
  },
})