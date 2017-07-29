import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render () {
        return (
            <header className="main-header">
                <a href="/" className="main-header__link">
                    <img src="assets/images/general/logo.svg" alt="FVKVN" className="site-logo"/>
                </a>
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