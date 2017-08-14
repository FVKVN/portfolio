import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './svg/logo.js';

class Header extends Component {
    render () {
        return (
            <header className="main-header">
                <Link to="/" className="main-header__link">
                    <Logo />
                </Link>
                <nav className="main-nav">
                    <NavLink className="main-nav__link" to='/about' activeClassName="main-nav__link--active">About</NavLink>
                    <NavLink className="main-nav__link" to='/work' activeClassName="main-nav__link--active">Work</NavLink>
                    <NavLink className="main-nav__link" to='/contact' activeClassName="main-nav__link--active">Contact</NavLink>
                </nav>
            </header>
        )
    }
}

export default Header;