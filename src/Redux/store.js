import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/counterSlice'
import userReducer from './Slices/usersSlice'

export default configureStore({
    reducer: {
        counter: counterReducer,
        users: userReducer
    },
})