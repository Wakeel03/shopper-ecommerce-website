import './Header.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

import { useHistory } from 'react-router-dom'
import { auth } from "../../firebase";

import React, { useState } from 'react'

import { selectUser } from '../../redux/userSlice'
import { useSelector } from 'react-redux'

import { cartItems } from '../../redux/cartItemSlice'

function Header() {
    const user = useSelector(selectUser)
    const history = useHistory()

    const items = useSelector(cartItems)

    const [openProfileDropDown, setOpenProfileDropDown] = useState(false)

    const signOut = () => {
        if (user) {
            auth.signOut();
        }
        history.push('/')
    }

    return (
        <div className="header">
           <div className="header__logo">Shopper</div> 
           <div className="header__tabs">
               <div className="header__tab active">Home</div>
               <div className="header__tab">About</div>
               <div className="header__tab">Contact Us</div>
           </div>
           <div className="header__cart">
                <AiOutlineShoppingCart className="header__addToCart" />
                <div className="header__cartNumberItems">{items.length}</div>
           </div>
           <div className="header__profileContainer">
               <CgProfile onClick={() => setOpenProfileDropDown(!openProfileDropDown)} className="header__profile" />
                {openProfileDropDown && 
                    <div className="header__profileDropDown">
                        <p>Profile</p>
                        <p>Settings</p>
                        <p>Payment</p>
                        <button onClick={signOut}>Sign Out</button>
                    </div>
                }
           </div>
           
        </div>
    )
}

export default Header
