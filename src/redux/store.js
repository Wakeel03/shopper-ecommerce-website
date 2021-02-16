import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import cartItemReducer from './cartItemSlice'

export default configureStore({
    reducer: {
        user: userReducer,
        cart: cartItemReducer,
    }
})
