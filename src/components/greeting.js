import React, { Component } from 'react';

class Greeting extends Component {
    render () {
        return (
            <div className="greeting">
                <div className="greeting__content">
                    <div className="container--small">
                        <h1 className="greeting__title">Hello</h1>
                        <p className="greeting__text">
                            My name is Liesbeth, a creative webdesigner and
                            developer. Do you want to know more? Please do not hesitate and take a further look.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Greeting;