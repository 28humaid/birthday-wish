import {configureStore} from '@reduxjs/toolkit'
import userNameReducer from '../features/userName/userNameSlice.js'

export const store = configureStore({
    reducer:{
        user:userNameReducer,
    }
})