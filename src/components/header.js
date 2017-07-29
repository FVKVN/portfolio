import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render () {
        return (
            <header className="main-header">
                <a href="/" className="main-header__logo">
                    <img src="assets/images/general/logo.svg" alt="FVKVN" className="main-header__img"/>
                </a>
                <nav className="main-header__nav">
                    <Link className="main-header__link" to='/about'>About</Link>
                    <Link className="main-header__link" to='/work'>Work</Link>
                    <Link className="main-header__link" to='/contact'>Contact</Link>
                </nav>
            </header>
        )
    }
}

export default Header;