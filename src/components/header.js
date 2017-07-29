import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from './svg/logo.js';

class Header extends Component {
    render () {
        return (
            <header className="main-header">
                <Link to="/" className="main-header__link">
                    <Logo />
                </Link>
                <nav className="main-nav">
                    <Link className="main-nav__link" to='/about'>About</Link>
                    <Link className="main-nav__link" to='/work'>Work</Link>
                    <Link className="main-nav__link" to='/contact'>Contact</Link>
                </nav>
            </header>
        )
    }
}

export default Header;