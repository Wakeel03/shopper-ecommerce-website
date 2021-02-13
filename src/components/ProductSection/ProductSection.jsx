import './ProductSection.css'
import ProductCard from '../ProductCard/ProductCard.jsx'

import React from 'react'

function ProductSection() {
    return (
        <div className="productSection">
            <h1>Our Products</h1>
            <div className="productSection__list">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default ProductSection
