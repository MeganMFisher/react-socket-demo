import axios from 'axios'
import React from 'react'



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