import React, { Component } from 'react';
import axios from 'axios';
import io from 'socket.io-client'


const socket = io('http://localhost:3010')

export default class Chat extends Component {
    constructor() {
        super()

        this.state = {
            messages: [],
        }
    }

    componentDidMount() {

    }


    render() {
        return (
            <div>
                This will be the chat application
            </div>
        )
    }
}