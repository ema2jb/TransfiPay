import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userRequestState:{
      loading:false
    },
    userDetails:{} 
}

const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
        changeUserRequestState(state,action){
          state.userRequestState.loading = action.payload
        },
        setUserDetails(state, action){
            state.userDetails = {...state.userDetails, ...action.payload}
        }
        }
    
})

export const userActions = userSlice.actions

export default userSlice.reducer