import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Button } from 'react-bootstrap'
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    const { user, logout } = useAuth()
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <NavLink to='/shop'>Shop</NavLink>
                <NavLink to='/orders'>Order Review</NavLink>
                <NavLink to='/inventory'>Manage Inventory</NavLink>
                <NavLink to='/register'>Register</NavLink>
                <small className='me-3 text-warning'>{user.displayName} </small>
                {user.email ? <Button variant='info' onClick={logout}>Logout</Button>
                    :
                    <NavLink to='/login'>Log in</NavLink>
                }
            </nav>
        </div>
    );
};

export default Header;