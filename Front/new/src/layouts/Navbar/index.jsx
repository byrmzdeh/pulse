import React from 'react'
import './style.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    
    return (
        // <div className={`navbar ${location.pathname==='/add' ? 'black' :'' ||  location.pathname==='/basket' ? 'black' :'' || location.pathname==='/wishlist' ? 'black' : ''}`}>
        <div className='navbar'> 
            <div className='pulse'><h1>Pulse <span>.</span></h1></div>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/add'}>Add Page</NavLink></li>
                <li><NavLink to={'/basket'}>Basket</NavLink></li>
                <li><NavLink to={'/wishlist'}>Wishlist</NavLink></li>
            </ul>
            <div className="number">
                <p className='reser'>Reservations</p>
                <i className="fa-solid fa-phone"></i>
                <p>652-345 3222 11</p>
            </div>
        </div>
    )
}

export default Navbar
