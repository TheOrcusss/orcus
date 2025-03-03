import React, { Component } from "react";

class Counter extends Component
{
    constructor(props) 
    {
        super(props);
        this.state = { count: 0 }; // Initializing state
    }

    increment = () => 
    {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => 
    {
        this.setState({ count: this.state.count - 1 });
    };

    reset = () => 
    {
        this.setState({ count: 0 });
    };

    render() 
    { 
        return (
            <div>
                <h2>Simple Counter</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}

export default Counter;