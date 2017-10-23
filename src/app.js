import React, { Component } from 'react';
import Main from './components/routing/main';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hide_ui: true
        }
    }

    render() {
        return (
            <div className="App">
                { !this.state.hide_ui ? <Header /> : null }
                <Main hideUi = {this.state.hide_ui }/>
                { !this.state.hide_ui ? <Footer /> : null }
            </div>
        );
    }
}

export default App;