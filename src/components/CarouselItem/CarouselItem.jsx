import './CarouselItem.css'

import React from 'react'
import { useDispatch } from 'react-redux'

import { addToCart } from '../../redux/cartItemSlice'

function CarouselItem({id, carouselItem, data}) {
    const dispatch = useDispatch()

    const addItemToCart = () => {
        dispatch(addToCart(id))
    }

    return (
        <div className={carouselItem}>
            <div className="carouselItem__itemInfo">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <h1>$ {data.price}</h1>
                <button onClick={addItemToCart}>Shop Now</button>
            </div>
            <img src={data.image} alt="" className="carouselItem__itemImg" />
        </div>
    )
}

export default CarouselItem
