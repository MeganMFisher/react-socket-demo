import React, { Component } from 'react';
// import axios from 'axios';
import io from 'socket.io-client';
// import { getMessages, sendMessage } from '../service/messages';


const socket = io()  
socket.on('connection', (data)=>{
    console.log(data);
})

export default class Chat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: []
            // newMessage: '',
            // id: 1,
            // user: 1
        }

        // this.handleChange = this.handleChange.bind(this)
        // this.addMessage = this.addMessage.bind(this)    
        // this.createMessage = this.createMessage.bind(this);
        // this.handleUserConnected = this.handleUserConnected.bind(this)
        // this.handleChatMessage = this.handleChatMessage.bind(this)
    }

    // componentDidMount() {
    //     getMessages().then(messages => {
    //   this.setState({
    //       messages: messages
    //     });
    // })
    // }

//     addMessage (event) {
//     event.preventDefault();
//         var message = {
//             message: this.state.newMessage,
//             id: this.state.id
//         }
//       sendMessage(message)
//       .then(() => {
//         getMessages().then(messages => {
//       this.setState({
//           messages: messages
//         });
//         })
//         this.setState({  
//           newMessage: ''
//         })
//       })
//   }

//    handleChange(event) {
//     this.setState({
//       newMessage: event.target.value
//     })
//   }


    componentDidMount() {
    //     if (!this.state.user) {
    //     const input = prompt('sockets are working')
    //     const user = (input)
    //     this.setState({
    //         user
    //     })
    //     console.log(this.state.user)
    //   if (!this.state.messages.length) this.getMessages();
    // }

        // socket.emit('useer_connected', this.state.user)

        // socket.on('error', data => {
        //     console.log('this error happened', data)
        // })
    

    //     getMessages().then(messages => {
    //   this.setState({
    //       messages: messages
    //     });
    //     console.log(this.state.messages)
    
    // })
    }
    
    // socket.emit('user_connected', this.state.user)
    // this.handleUserConnected()
    // this.handleChatMessage()

    // socket.on('error', data => {
    //   console.log('this error happened', data)
    // })
    // }

    // handleUserConnected() {
    //     socket.on('user_connected', data => {
    //     console.log('this user connected', data)
    //     })
    // }

    // handleChatMessage() {

    //     socket.on('chat_message', data => {
    //     console.log('fired', data)
    //     const messages = this.state.messages.concat([data])
    //     this.setState({
    //         messages
    //     })
    //     })
    // }

    //   //creatMessage is being passed as prop into AddMessages which is later being used in the Message bar jsx
    // createMessage(messageText) {
    //     // this.setState( { messages: [...this.state.messages, { text: messageText, complete: false } ] })
    //     // console.log(this.props.params.id)
    //     socket.emit('chat_message', { message_body: messageText, sender_id: this.state.user, conversation_id: 12 })
    // }

    // getMessages() {
    // //axios.get('http://localhost:3030/messages') //this is the original working version
    // // const id = (this.props.match.params.id)
    // // console.log(!this.props.match ? )
    // if( !this.props.match ) {
    //   axios.get('http://localhost:3030/messages')
    //   .then(resp => {
    //     console.log(resp.data)
    //     this.setState({
    //       messages: resp.data,
    //     })
    //     console.log(this.state.messages)
    //   })
    //   .catch(err => {
    //     console.log('why no messages ? ', err.message)
    //   })
    
    // } else {
    //   const id = (this.props.match.params.id)

    //   axios.get(`http://localhost:3030/messages/${id}`)
    //   .then(resp => {
    //     console.log(resp.data)
    //     this.setState({
    //       messages: resp.data,
    //     })
    //     console.log(this.state.messages)
    //   })
    //   .catch(err => {
    //     console.log('why no messages ? ', err.message)
    //   })
    // }
  
//   }

  render() {
    const message = this.state.messages.filter(message => message)

      .map((message, index) => (
        <div key={index}>
            <div id='sender'>{message.sender_id}</div>
            <div id='message'>{message.message_body}</div>
        </div>
      ));


    return (
      <div>
          <h2>Messaging App</h2>
        <div>
          { message }
        </div>
        <div>

           {/* <AddMessage createMessage={this.createMessage} />  */}

        </div>
            <input onChange={ this.handleChange } value={ this.state.newMessage }/>
            <button onClick={ this.addMessage }>Send</button>
      </div>
    );
  }
}