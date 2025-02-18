import React, { Component } from 'react'
import Navbar from './landing';
import Body from './Body';

class Landing extends Component {
    render() {
        return (
            <div>
                <Navbar loggedIn={this.props.loggedIn}/>
                <Body/>
            </div>
        )
    }
}

export default Landing
