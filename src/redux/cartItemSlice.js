import { createSlice } from "@reduxjs/toolkit"

const persistentItemList = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

export const cartItemSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        items: persistentItemList,
    },
    reducers: {
        addToCart: (state, action) => {
            let newState = [...state.items, action.payload]
            state.items = newState
            localStorage.setItem('cartItems', JSON.stringify(newState))
        },
        emptyCart: (state) => {
            state.items = []
            localStorage.removeItem('cartItems')
        },
    },
})

export const { addToCart, emptyCart } = cartItemSlice.actions

export const cartItems = (state) => state.cart.items

export default cartItemSlice.reducer