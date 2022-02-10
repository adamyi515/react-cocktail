import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.styles.css';

const Navbar = () => {
    return(
        <nav className='navbar'>
            <div className='navbar__container'>
                <div className='navbar__brand'>
                    <h1>TheCocktailDB</h1>
                </div>
                <ul className='navbar__menu'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;