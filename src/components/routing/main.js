import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/home.js';
import About from '../../pages/about.js';
import Work from '../../pages/work.js';
import Contact from '../../pages/contact.js';

class Main extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/work' component={Work}/>
                    <Route path='/contact' component={Contact}/>

                </Switch>
            </main>
        )
    }
}

export default Main;