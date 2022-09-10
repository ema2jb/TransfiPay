
import {configureStore} from '@reduxjs/toolkit'
import authReducer from './auth-slice'
import UIReducer from './ui-slice'
import bizReducer from './biz-slice'

const store = configureStore({
    reducer:{
       auth:authReducer,
       UI:UIReducer,
       biz:bizReducer
    }
})

export default store