import './ProductCard.css'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart, emptyCart } from '../../redux/cartItemSlice'

function ProductCard({id, data}) {

    const dispatch = useDispatch()

    const addItemToCart = () => {
        dispatch(addToCart(id))
    }

    return (
        <div className="productCard">
            <img src={data.image} alt=""/>
            <div className="productCard__info">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <div className="productCard__infoShop">
                    <h1>${data.price}</h1>
                    <button onClick={addItemToCart}>Add to Cart</button>
                </div>
                
            </div>
        </div>
    )
}

export default ProductCard
