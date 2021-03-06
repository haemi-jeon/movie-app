import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor");
    }

    state = {
        count: 0,
    };
    add = () => {
        this.setState((current) => ({ count: current.count + 1 }));
    };
    minus = () => {
        this.setState((current) => ({ count: current.count - 1 }));
    };
    // state가 변경되면 다시 render 됨

    render() {
        console.log("render");
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
}

export default App;
