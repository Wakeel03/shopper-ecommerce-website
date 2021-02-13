import './ProductCard.css'
import  fountainPen from '../../img/fountainPen.jpg'

import React from 'react'

function ProductCard() {
    return (
        <div className="productCard">
            <img src={fountainPen} alt=""/>
            <div className="productCard__info">
                <h2>Fountain Pen</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                <div className="productCard__infoShop">
                    <h1>$64.99</h1>
                    <button>Add to Cart</button>
                </div>
                
            </div>
        </div>
    )
}

export default ProductCard
