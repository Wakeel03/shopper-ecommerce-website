import './Cart.css'

import { useSelector, useDispatch } from 'react-redux'
import { cartItems, addToCart, removeFromCart, emptyCart } from '../../redux/cartItemSlice'

import { cartItemCount } from '../../redux/cartItemSlice'

import db  from '../../firebase'

import { useHistory } from 'react-router-dom'

import CartItem from './CartItem'
import Paypal from '../PayPal/Paypal'
import React, { useState, useEffect } from 'react'

function Cart() {

    const dispatch = useDispatch()

    const history = useHistory()

    const itemSelector = useSelector(cartItems)
    const itemCount = useSelector(cartItemCount)
    const [itemList, setItemList] = useState([])

    const [totalCost, setTotalCost] = useState(0)
    const [tax, setTax] = useState(0)
    const [shipping, setShipping] = useState(0)
    const [grandTotal, setGrandTotal] = useState(0)

    const increaseItem = (id, price) => {
        setTotalCost(totalCost => totalCost + price)
        dispatch(addToCart(id))
    }

    const decreaseItem = (id, price) => {
        setTotalCost(totalCost => totalCost - price)
        dispatch(removeFromCart(id))
    }

    useEffect(() => {
       setGrandTotal (Math.floor((totalCost + tax + shipping) * 100) / 100)
    }, [tax, shipping])

    useEffect(() => {
        setTax(Math.floor(0.1 * totalCost * 100) / 100)
    }, [totalCost])

    useEffect(() => {
        
        setItemList([])
        setTotalCost(0)
        setShipping(2.99)
    
        itemSelector.forEach(item =>{
            db.collection('products').doc(item.id).get().then(snapshot => {
                return snapshot.data()
            }).then((d) =>{
                setTotalCost(totalCost => totalCost + (d.price * item.count))
                setItemList(itemList => [...itemList, {id: item.id, count: item.count, data: d}])
            }
        )})
    }, [])


    const clearCart = () => {
        dispatch(emptyCart())
        setItemList([])
        setTotalCost(0)
        setShipping(0)
    }

    return (
        <div className="cart">
            <h1>Cart</h1>
            <div className="cart__tabs">
                <div className="cart__tab">Order Items</div>
                <div className="cart__tab">Shipping Details</div>
            </div>
            <div className="cart__details">
                <div className="cart__order">
                    <div className="cart__orderItems">
                        <div className="cart__orderItemsHeader">
                            <h2 className="cart__orderItemsHeaderProduct">Product</h2>
                            <h2>Quantity</h2>
                            <h2>Total Price</h2>
                        </div>


                        {itemList.map(item => (
                            <CartItem key={item.id} item={item} increaseItem={increaseItem} decreaseItem={decreaseItem}/>  
                        ))}
                        
                    </div>
                    <button>Shipping Details</button>
                </div>

                <div className="cart__orderDetails">
                    <div className="cart__orderDetailsContainer">
                        <h2>Order Details</h2>
                        <div className="cart__orderDetail">
                            <h3>Subtotal</h3>
                            <h3>$ {Math.floor(totalCost * 100) / 100}</h3>
                        </div>
                        <div className="cart__orderDetail">
                            <h3>Tax</h3>
                            <h3>$ {tax}</h3>
                        </div>
                        <div className="cart__orderDetail">
                            <h3>Shipping</h3>
                            <h3>$ {shipping}</h3>
                        </div>
                        <div className="cart__orderTotal">
                            <h3>Total Amount</h3>
                            <h3>$ {grandTotal}</h3>
                        </div>
                    </div>
                    <Paypal itemList={itemList} setItemList={setItemList} grandTotal={grandTotal} clearCart={clearCart}/>
                    <button className="cart__removeCartBtn" onClick={clearCart}>Clear Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
