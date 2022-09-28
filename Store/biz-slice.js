import {createSlice} from '@reduxjs/toolkit'
import useLocalStorage from '../hooks/useLocalStorage'

const {getItem} = useLocalStorage()

const storedActiveBiz = getItem('activeBiz')


const initialBizInfo = {
        name:"",
        email:"",
        phoneNumber:"",
        country:"",
        address:"",
        description:"",
        instagram:"",
        facebook:"",
        twitter:"",
        ownerPaysTransactionCharge:false,
        customerPaysTransactionCharge:false
}


const initialState = {
    bizRequestState:{
      loading:false
    },
    createBiz:{
        name:"",
        email:"",
        phoneNumber:"",
        country:"",
        address:"",
        description:"",
        instagram:"",
        facebook:"",
        twitter:"",
        ownerPaysTransactionCharge:false,
        customerPaysTransactionCharge:false
    },
    allMyBiz:[],
    allMyInvites:[],
    activeBiz:storedActiveBiz || {},
    activeBizUsers:[],
    bizInviteeDetails:{
      email:"",
      role:"",
      message:""
    },
    updateBizInfo:storedActiveBiz || {}   
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
        changeBizRequestState(state,action){
          state.bizRequestState.loading = action.payload
        },
        setAllMyBiz(state,action){
          state.allMyBiz = action.payload
        },
        setAllMyInvites(state,action){
          state.allMyInvites = action.payload
        },
        setActiveBiz(state,action){
          state.activeBiz =action.payload
        },
        setActiveBizUsers(state, action){
          state.activeBizUsers = action.payload
        },
        setUpdateBizInfo(state, action){
          state.updateBizInfo = {
            ...state.updateBizInfo, ...action.payload
          }
        },
        reetBizInfo(state, action){
          state.createBiz = {...state.createBiz, ...initialBizInfo}
        }
        }
    
})

export const bizActions = bizSlice.actions

export default bizSlice.reducer