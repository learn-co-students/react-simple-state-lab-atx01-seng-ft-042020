import React, { Component } from 'react'

export default class Cell extends Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    handleClick = () => {
        // let color = this.state.color == "#F00" ? "#00F" : "#F00"
        this.setState({ color: "#333" })
    }
    render() {
        return (
            <div style={{ backgroundColor: this.state.color }} className="cell" onClick={this.handleClick}> </div>
        )
    }
}