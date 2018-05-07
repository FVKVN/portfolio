import React, { Component } from 'react';
import data from './data/home.json'

class Home extends Component {
    render () {
        return (
            <div className="page homepage">
                <button onClick={this.props.onStateChange()}>update state</button>
            </div>

        )
    }
}

export default Home;