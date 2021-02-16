import './ProductSection.css'
import ProductCard from '../ProductCard/ProductCard.jsx'
import db from '../../firebase'

import React, { useState, useEffect } from 'react'

function ProductSection() {

    const [carouselItemList, setCarouselItemList] = useState([])

    useEffect (() => {
        db.collection('products').onSnapshot(snapshot => {
            setCarouselItemList(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        })
    }, [])

    return (
        <div className="productSection">
            <h1>Our Products</h1>
            <div className="productSection__list">
                {carouselItemList.map(item => (
                    <ProductCard key={item.id} id={item.id} data={item.data}/>
                ))}
            </div>
        </div>
    )
}

export default ProductSection
