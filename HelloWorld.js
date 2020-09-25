import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: "Tommy"
    }
    render() {
        return (
            <>
                <p>Hello, {this.state.who}!</p>
                <button onClick={e=>this.setState({who: "World"})}>World</button>
                <button onClick={e=>this.setState({who: "Friend"})}>Friend</button>
                <button onClick={e=>this.setState({who: "React"})}>React</button>
            </>
        );
    }
}

export default HelloWorld;