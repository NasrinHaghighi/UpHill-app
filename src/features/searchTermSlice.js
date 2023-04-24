import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userSearchTerm:''
   }
   export const searchTermSlice = createSlice({
    name: 'UserSearchTerm',
    initialState,
  
    reducers: {
      UserTopic: (state, action) => {
      state.userSearchTerm=action.payload
          },
        
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { UserTopic } = searchTermSlice.actions
  
  export default searchTermSlice.reducer   