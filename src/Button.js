import React, { Component } from 'react';

class Button extends Component {
    state = {
        count: 0
    }

    constructor(props) {
        super(props);
        this.countUp = this.countUp.bind(this);
    }

    countUp() {
        console.log("countUp()");
        //this.setState({ count: this.state.count+1 });
        this.setState((prevState, prevProps) => {
            return { count: prevState.count + 1 };
        });
    }

    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={this.countUp}>
                    {this.props.text}
                </button>
            </div>
        );
    }
}


export default Button;