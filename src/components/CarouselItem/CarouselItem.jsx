import './CarouselItem.css'

import React from 'react'

function CarouselItem({carouselItem, data}) {
    return (
        <div className={carouselItem}>
            <div className="carouselItem__itemInfo">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <h1>$ {data.price}</h1>
                <button>Shop Now</button>
            </div>
            <img src={data.image} alt="" className="carouselItem__itemImg" />
        </div>
    )
}

export default CarouselItem
