import './Cart.css'

import React from 'react'

function Cart() {
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
                        <div className="cart__orderItem">
                            <img />
                            <div className="cart__orderItemName"><img /><p>Greenry Towel Pure Material</p></div>
                            <div className="cart__orderItemQuantity">
                                <button>+</button>
                                <h3>2</h3>
                                <button>-</button>
                            </div>
                            <div className="cart__orderItemPrice">$ 9.98</div>
                        </div>

                        
                    </div>
                    <button>Shipping Details</button>
                </div>
                <div className="cart__orderDetails">
                    dnfn
                </div>
            </div>
        </div>
    )
}

export default Cart
