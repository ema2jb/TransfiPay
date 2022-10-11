import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    walletRequestState:{
      loading:false
    },
    coinList:{} 
}

const walletSlice = createSlice({
    name:"wallet",
    initialState:initialState,
    reducers:{
        changeUserRequestState(state,action){
          state.userRequestState.loading = action.payload
        },
        setCoinList(state, action){
            state.coinList = {...state.coinList, ...action.payload}
        }
        }
    
})

export const walletActions = walletSlice.actions

export default walletSlice.reducer