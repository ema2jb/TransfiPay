
import {configureStore} from '@reduxjs/toolkit'
import authReducer from './auth-slice'
import UIReducer from './ui-slice'
import bizReducer from './biz-slice'
import userReducer from './user-slice'
import walletReducer from './user-slice'

const store = configureStore({
    reducer:{
       auth:authReducer,
       UI:UIReducer,
       biz:bizReducer,
       user:userReducer,
       wallet:walletReducer
    }
})

export default store