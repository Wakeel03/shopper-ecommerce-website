import React, { useState } from 'react'

function CartItem({item, increaseItem, decreaseItem}) {

    const [count, setCount] = useState(item.count)

    const increase = () => {
        increaseItem(item.id, item.data.price)
        setCount(count + 1)
    }

    const decrease = () => {
        if (count === 0) return
        decreaseItem(item.id, item.data.price)
        setCount(count - 1)
    }

    return (
       <div key={item.id} className="cart__orderItem">
            <div className="cart__orderItemName"><img src={item.data.image}/><p>{item.data.name}</p></div>
            <div className="cart__orderItemQuantity">
                <button onClick={decrease}>-</button>
                <h3>{count}</h3>
                <button onClick={increase}>+</button>
            </div>
            <div className="cart__orderItemPrice">$ {Math.floor(count * item.data.price * 100) / 100}</div>
        </div>  
    )
}

export default CartItem
