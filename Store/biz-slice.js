import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    bizRequestSate:{
      loading:false
    },
    createBiz:{
        bizName:"",
        bizEmail:"",
        bizPhone:"",
        bizCountry:"",
        bizAddress:"",
        bizDescription:"",
    },
    bizSocials:{
        instagram:"",
        facebook:"",
        twitter:"",
    },
    transactionCharge:{
      bizOwner:"",
      customer:""
    },
    allMyBiz:[],
    activeBiz:{},
    activeBizUsers:[],
    bizInviteeDetails:{
      email:"",
      role:"",
      message:""
    }   
}

const bizSlice = createSlice({
    name:"biz",
    initialState:initialState,
    reducers:{
        changeBizDetailsState(state, action){
            state.createBiz = {
              ...state.createBiz, ...action.payload
            }
          },
          changeBizInviteeDetailsState(state, action){
            state.bizInviteeDetails = {
              ...state.bizInviteeDetails, ...action.payload
            }
          },
        changeBizSocials(state, action){
          state.bizSocials = {
            ...state.bizSocials,
            ...action.payload
          }
        },
        changeTransactionCharge(state,action){
          const item = Object.keys(action.payload)[0]
          for (const option in state.authAppState){
            if(item !== option){
              state.transactionCharge = {...state.transactionCharge, [option]:false}
            }
          }
          state.transactionCharge ={
            ...state.transactionCharge,
            ...action.payload
          }
        },
        changeBizRequestState(state,action){
          state.bizRequestSate.loading = action.payload
        },
        setAllMyBiz(state,action){
          state.allMyBiz = action.payload
        },
        setActiveBiz(state,action){
          state.activeBiz =action.payload
        },
        setActiveBizUsers(state, action){
          state.activeBizUsers = action.payload
        }
        }
    
})

export const bizActions = bizSlice.actions

export default bizSlice.reducer