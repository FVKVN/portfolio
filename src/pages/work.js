import React, { Component } from 'react';
import data from './data/about.json';

class Work extends Component {
    render () {
        return (
            <div className="container">
                <h1>{data.title}</h1>
                <p>{data.text}</p>
            </div>
        )
    }
}

export default Work;