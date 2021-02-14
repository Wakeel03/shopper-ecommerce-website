import './ProductCard.css'
import  fountainPen from '../../img/fountainPen.jpg'

import React from 'react'

function ProductCard({data}) {
    return (
        <div className="productCard">
            <img src={data.image} alt=""/>
            <div className="productCard__info">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <div className="productCard__infoShop">
                    <h1>${data.price}</h1>
                    <button>Add to Cart</button>
                </div>
                
            </div>
        </div>
    )
}

export default ProductCard
