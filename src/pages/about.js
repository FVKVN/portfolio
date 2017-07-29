import React, { Component } from 'react';
import data from './data/about.json';

class About extends Component {
    render () {
        return (
            <div className="section section--triangle section--about bg--white" ref="about">
                <div className="container--small">
                    <div className="section__content">
                        <div className="section__header text--center">
                            <h2 className="section__title">About</h2>
                        </div>
                        <p className="section__text">
                            I am a 28 year old all-round creative based in Antwerp, Belgium.
                            After my education as an interior designer,
                            I have been developing a passion for the web.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;