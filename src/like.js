import React, { Component } from 'react'

class Clicker extends Component {
    constructor(props) {
        super(props)

        this.state = { count: 0 }
    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }

    decrement() {
        this.setState({ count: this.state.count - 1 })
    }

    render() {
        return (
            <div className='count'>
                <button onClick={(e) => {
                    this.decrement()
                }}> 👎🏽</button>
                <h1>{this.state.count}</h1>
                <button onClick={(e) => {
                    this.increment()
                }}> 👍🏽</button>
            </div>
        )
    }
}

export default Clicker;