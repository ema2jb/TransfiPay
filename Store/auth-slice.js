import {createSlice} from '@reduxjs/toolkit'

import useLocalStorage from '../hooks/useLocalStorage';

const {getItem} = useLocalStorage()

const userDetails = getItem('userDetails')

const initialAuthState = {
    authRequestState:{
      error:false,
      loading:false,
      isAuthenticated: false,
    },
    authAppState:{
      showKycPage:false,
      showSignupPage:false,
      showLoginPage:true,
      showForgotPasswordPage:false,
      showResetPasswordPage:false,
      showOtpPage:false
    },
    userDetials:userDetails || {}
  };
  
  const authSlice = createSlice({
    name: "auth",
    initialState:initialAuthState,
    reducers: {
      changeAuthRequestState(state, action){
        const authRequestState = action.payload
        state.authRequestState = {...state.authRequestState, ...authRequestState }
      },

      changeAuthAppState(state, action){
        const page = action.payload
        for (const item in state.authAppState){
          if(item !== page){
            state.authAppState = {...state.authAppState, [item]:false}
          }
        }
        state.authAppState = {...state.authAppState, [page]:!state.authAppState[page]}
      },

      storeUserDetails(state,action){
        state.userDetials = action.payload
      }
    },
  });

  export const authActions = authSlice.actions

  export default authSlice.reducer