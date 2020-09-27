import React, { Component } from 'react';

class Button extends Component {

    countUp() {
        console.log("countUp()");
    }
    
    render() {
        return (
            <button onClick={this.countUp}>
                {this.props.text}
            </button>
        );
    }
}


export default Button;