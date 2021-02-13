import './Carousel.css'

import React, { useState, useEffect } from 'react'
import sunglasses from '../../img/sunglasses.jpg'

function Carousel() {

    const [carouselItem, setCarouselItem] = useState("carousel__item")
    const [currentSlide, setCurrentSlide] = useState(0)

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
                
            </div>
            <div  onClick={slideRight} className="carousel__navigationArrow rightArrow">

            </div>
 
            <div className={carouselItem}>
                <div className="carousel__itemInfo">
                    <h2>Super Shopper Sunglasses</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <h1>$ 29.99</h1>
                    <button>Shop Now</button>
                </div>
                <img src={sunglasses} alt="" className="carousel__itemImg" />
            </div>
            <div className={carouselItem}>
                <div className="carousel__itemInfo">
                    <h2>Food Trip</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <h1>$ 29.99</h1>
                    <button>Shop Now</button>
                </div>
                <img src={sunglasses} alt="" className="carousel__itemImg" />
            </div>
             <div className={carouselItem}>
                <div className="carousel__itemInfo">
                    <h2>Caramel</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <h1>$ 29.99</h1>
                    <button>Shop Now</button>
                </div>
                <img src={sunglasses} alt="" className="carousel__itemImg" />
            </div>
            <div className={carouselItem}>
                <div className="carousel__itemInfo">
                    <h2>Crousitillant</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <h1>$ 29.99</h1>
                    <button>Shop Now</button>
                </div>
                <img src={sunglasses} alt="" className="carousel__itemImg" />
            </div>
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
