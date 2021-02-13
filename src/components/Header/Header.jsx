import './Header.css'

import React from 'react'

function Header() {
    return (
        <div className="header">
           <div className="header__logo">Shopper</div> 
           <div className="header__tabs">
               <div className="header__tab">Home</div>
               <div className="header__tab">About</div>
               <div className="header__tab">Contact Us</div>
           </div>
           <div className="header__addToCart"></div>
           <div className="header__profile"></div>
        </div>
    )
}

export default Header
