import './Carousel.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import CarouselItem from '../CarouselItem/CarouselItem.jsx'
import db from '../../firebase'

import React, { useState, useEffect } from 'react'
import sunglasses from '../../img/sunglasses.jpg'

function Carousel() {

    const [carouselItem, setCarouselItem] = useState("carousel__item")
    const [currentSlide, setCurrentSlide] = useState(0)

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

    useEffect(() => {
        if (currentSlide === 0){
            setCarouselItem("carousel__item left")
        }
        else if (currentSlide === 1){
            setCarouselItem("carousel__item left-100")
        }else if (currentSlide === 2){
            setCarouselItem("carousel__item left-200")
        }else if (currentSlide === 3){
            setCarouselItem("carousel__item left-300")
        }
    }, [currentSlide])

    const slideLeft = () => {
        setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1)
    }

    const slideRight = () => {
        setCurrentSlide(currentSlide === 3 ? 3 : currentSlide + 1)
    }

    return (
        <>
        <div className="carousel">
            <div onClick={slideLeft} className="carousel__navigationArrow leftArrow">
                <IoIosArrowBack />
            </div>
            <div  onClick={slideRight} className="carousel__navigationArrow rightArrow">
                <IoIosArrowForward />
            </div>

            {carouselItemList.map(item => (
                <CarouselItem key={item.id} carouselItem={carouselItem} data={item.data}/>
            ))}
        </div>
        <div className="carousel__navigation">
            {Array(4).fill(1).map((el, ind) => (
                <div onClick={() => setCurrentSlide(ind)} className={`carousel__navigationDot ${ind === currentSlide ? 'active' : ''}`}></div>
            ))}
        </div>
        </>
    )
}

export default Carousel
