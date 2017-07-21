import axios from 'axios'

// export function getMessagesById(id){
//     axios.get('http://localhost:3010/messages/' + id)
//       .then(resp => {
//           console.log(resp)
//       })
//       .catch(err => {
//         console.log('why no messages ? ', err.message)
//       })
//   }

  export function getMessages(){
    return axios.get( 'http://localhost:3010/messages' ).then( response => response.data );
  }

  export function sendMessage(message) {
      return axios.post( 'http://localhost:3010/messages', message).then( response => response.data );
  }