import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom"


import { useSelector } from 'react-redux'
import { selectUser } from '../../redux/userSlice'

import db from '../../firebase'
function Paypal({ itemList, setItemList, grandTotal, clearCart }) {

    const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
    
    const user = useSelector(selectUser)
    let shipping = null

    const addItemsToDatabase = () => {
        db.collection('orders').add({
            user: user,
            cart: itemList,
            grandTotal: grandTotal,
            shipping_address: shipping
        })
    }
    
    const createOrder = (data, actions, err) => {
        return actions.order.create({
            intent: "CAPTURE",
            purchase_units:  [
                {
                    // description: "",
                    amount: {
                        currency_code: "USD",
                        value: parseFloat(grandTotal)
                    }
                },
            ],
        });
    }

    const onApprove = async (data, actions) => {
        const order = await actions.order.capture();
        //console.log(order);
        if (order.status === "COMPLETED"){
            shipping = order.purchase_units[0].shipping.address
            //console.log(shipping)
            addItemsToDatabase()
            clearCart()
        }        
    }

    return (
        <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
        />
    )
}

export default Paypal
