import React, { Component } from 'react'

export default class LifeCycle extends Component {
    constructor() {
        super()
        this.state = {
            name: "This name will change in 5 sec"
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: "this is a component Did Mount method" })
        }, 5000)
    }


        render() {
            console.log("render")
            return (
                <div>
                    <h1>{this.state.name}</h1>
                </div>
            )
        }
    }
