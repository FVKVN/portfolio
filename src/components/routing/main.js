import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/home.js';
import About from '../../pages/about.js';
import Work from '../../pages/work.js';
import Contact from '../../pages/contact.js';

const renderHomePage = (props) => {
    return (
        <Home onStateChange={this.onStateChange }{...props}/>
    );
}

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' render={renderHomePage}/>
                <Route path='/about' component={About}/>
                <Route path='/work' component={Work}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        )
    }
}

export default Main;