import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom"

function Paypal({ itemList, setItemList, grandTotal, clearCart }) {

    const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
    
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
        // console.log(order);
        if (order.status === "COMPLETED"){
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
