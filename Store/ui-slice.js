import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    bizUI:{
        step1:false,
        step2:false,
        allBiz:false,
        invites:false
    },
    teamsUI:{
      invite:false,
      collaborate:true,
    },
    walletActionsUI:{
      currentStep:""
    }
}

const UISlice = createSlice({
    name:"UI",
    initialState:initialState,
    reducers:{
        changeBizUiState(state, action){
            const page = action.payload
            for (const item in state.bizUI){
              if(item !== page){
                state.bizUI = {...state.bizUI, [item]:false}
              }
            }
            state.bizUI = {...state.bizUI, [page]:!state.bizUI[page]}
          },
          changeTeamsUiState(state, action){
            const page = action.payload
            for (const item in state.teamsUI){
              if(item !== page){
                state.teamsUI = {...state.teamsUI, [item]:false}
              }
            }
            state.teamsUI = {...state.teamsUI, [page]:!state.teamsUI[page]}
          },
          changeWalletActionsUI(state, action){
            state.walletActionsUI.currentStep = action.payload
          }
        }
    
})

export const UIActions = UISlice.actions

export default UISlice.reducer