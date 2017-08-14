import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}
    }

    render () {
        return (
            <footer className="main-footer">
                <p>
                    All rights reserved | fvkvn.be &copy; {this.state.date.getFullYear()}
                </p>
            </footer>
        )
    }
}

export default Footer;