import React, { Component } from 'react';
import Main from './components/routing/main';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            HIDE_UI: true,
            HIDE_HEADER: false
        };

        this.onStateChange = this.onStateChange.bind(this);
    }

    onStateChange() {
        this.setState({HIDE_UI : false});

        console.log('statechange')
    }

    render() {
        return (
            <div className="App">
                { this.state.HIDE_UI ? null : <Header /> }
                <Main onStateChange={this.onStateChange }/>
                { this.state.HIDE_UI ? null : <Footer /> }
            </div>
        );
    }
}

export default App;