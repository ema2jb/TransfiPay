
import {configureStore} from '@reduxjs/toolkit'
import authReducer from './auth-slice'
import UIReducer from './ui-slice'

const store = configureStore({
    reducer:{
       auth:authReducer,
       UI:UIReducer
    }
})

export default store