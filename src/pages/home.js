import React, { Component } from 'react';
import BigHead from '../components/svg/bigHead.js'
import data from './data/home.json';

class Home extends Component {
    render () {
        return (
            <div className="page homepage">
                <header className="hero">
                    <div className="hero__visual__overlay"></div>
                    <BigHead/>
                </header>
                <main className="main-content">
                </main>
            </div>

        )
    }
}

export default Home;