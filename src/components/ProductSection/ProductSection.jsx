import './ProductSection.css'
import ProductCard from '../ProductCard/ProductCard.jsx'
import db from '../../firebase'

import React, { useState, useEffect } from 'react'

function ProductSection() {

    const [carouselItemList, setCarouselItemList] = useState([])

    const [categoryList, setCategoryList] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('All Products')

    useEffect (() => {
        db.collection('categories').onSnapshot(snapshot => {
            setCategoryList(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    category: doc.data().category
                }))
            )
        })
    }, [])

    useEffect (() => {
        if (selectedCategory === 'All Products'){
            db.collection('products').onSnapshot(snapshot => {
                setCarouselItemList(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                )
            })
        }else{
            db.collection('products').where('category', '==', selectedCategory).onSnapshot(snapshot => {
                setCarouselItemList(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                )
            })
        }
        
    }, [selectedCategory])

    

    return (
        <div className="productSection">
            <div className="productSection__header">
                <h1>Our Products</h1>
                <select onChange={(e) => setSelectedCategory(e.target.value)} name="cars" id="cars">
                    <option value="All Products">All Products</option>
                    {categoryList.map(category => (
                        <option key={category.id} value={category.category}>{category.category}</option>
                    ))}

                </select>
            </div>
            
            <div className="productSection__list">
                {carouselItemList.map(item => (
                    <ProductCard key={item.id} id={item.id} data={item.data}/>
                ))}
            </div>
        </div>
    )
}

export default ProductSection
