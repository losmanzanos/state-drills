import React from 'react';

class Bomb extends React.Component {
    state = {
        count: 0
    }
    componentDidMount() {
        this.interval = setInterval(()=> {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000) 
    }
    componentWillUnmount() {
        this.interval.clear()
    }
    render() {
        let word;
        if (this.state.count > 7) {
            word = 'BOOM!!!!'
        } else if (this.state.count % 2 == 0) {
            word = 'Tick'
        } else {
            word = 'Tock'
        }
        return (
            <>
                {word}
            </>
        );
    }
}

export default Bomb;