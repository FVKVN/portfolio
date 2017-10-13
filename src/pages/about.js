import React, { Component } from 'react';
import data from './data/about.json';

const services = data.services.list;

class About extends Component {
    render () {
        return (
            <div>
                <section className="page-section" id="section-about">
                    <h2 className="page-section__header">{data.title}</h2>
                    <p>{data.intro}</p>
                </section>
                <section className="page-section background--theme-secondary">
                    <h2 className="page-section__header">
                        {data.services.title}
                    </h2>
                    <section className="services">
                        
                    </section>
                </section>
            </div>
        )
    }
}

export default About;