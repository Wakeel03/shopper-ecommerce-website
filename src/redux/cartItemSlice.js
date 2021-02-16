import { createSlice } from "@reduxjs/toolkit"

const persistentItemList = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const persistentItemCount = localStorage.getItem('cartItemCount') ? parseInt(JSON.parse(localStorage.getItem('cartItemCount'))) : 0

export const cartItemSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        items: persistentItemList,
        totalItems: 0,
        totalItems: persistentItemCount,
    },
    reducers: {
        addToCart: (state, action) => {

            const index = state.items.findIndex((e) => {return e.id === action.payload})

            if (index === -1){
                let newState = [...state.items, {id: action.payload, count: 1}]
                state.items = newState
                
                localStorage.setItem('cartItems', JSON.stringify(newState))
                
            }

            else{
                state.items[index].count += 1
                localStorage.setItem('cartItems', JSON.stringify(state.items))
            }

            state.totalItems += 1
            localStorage.setItem('cartItemCount', JSON.stringify(state.totalItems))
        },

        removeFromCart: (state, action) => {
            const index = state.items.findIndex((e) => e.id === action.payload)

            state.items[index].count -= 1

            localStorage.setItem('cartItems', JSON.stringify(state.items))
            
            state.totalItems -= 1
            localStorage.setItem('cartItemCount', JSON.stringify(state.totalItems))

        },

        emptyCart: (state) => {
            state.items = []
            state.totalItems = 0
            localStorage.removeItem('cartItems')
            localStorage.removeItem('cartItemCount')
        },
    },
})

export const { addToCart, emptyCart, removeFromCart } = cartItemSlice.actions

export const cartItems = (state) => state.cart.items
export const cartItemCount = (state) => state.cart.totalItems

export default cartItemSlice.reducer