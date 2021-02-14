import './Header.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'

import { useHistory } from 'react-router-dom'
import { auth } from "../../firebase";

import React from 'react'

import { selectUser } from '../../redux/userSlice'
import { useSelector } from 'react-redux'

function Header() {
    const user = useSelector(selectUser)
    const history = useHistory()

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
                <div className="header__cartNumberItems">5</div>
           </div>
           <CgProfile onClick={signOut} className="header__profile" />
        </div>
    )
}

export default Header
