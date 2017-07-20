const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      config = require('./config.js'),
      cors = require('cors')
    //   server = require('http').createServer(app),
    //   io = require('socket.io')(server, { serveClient: false });

massive(config.database).then(db => {
    app.set('db', db)
}).catch((err) => {
    console.log(err)
})

var port = 3010;

var app = express()
app.use(bodyParser.json())
app.use(cors())

const controller = require('./controller.js')

// io.on('connection', socket => {
//   console.log('A user connected')

//   socket.on('user_connected', data => {
//     socket.broadcast.emit('user_connected', { data })
//     socket.emit('user_connected', { data })
//   })

//   socket.on('chat_message', data => {
//     controller.createMessage(app, data).then(resp => {
//       socket.broadcast.emit('chat_message', data)
//       socket.emit('chat_message', data)
//     })
//       .catch(err => {
//         socket.emit('error', err.message)
//       })
//     console.log(data)

//   })

//   socket.on('chat', data => {
//     socket.broadcast.emit('chat', data);
//   })

//   //Send a message after a timeout of 4seconds
//   setTimeout(function () {
//     socket.send('Sent a message 4seconds after connection!');
//   }, 4000);
// });


app.get('/messages', controller.getAllMessages)
app.post('/api/message/', controller.createMessage)


app.listen(port, function() {
  console.log("Started server on port", port);
});