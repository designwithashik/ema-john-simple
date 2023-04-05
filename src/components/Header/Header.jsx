import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="logo" />
            <div>
            <Link to="/">shop</Link>
            <Link to="/orders">Order</Link>
            <Link to="/Inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;