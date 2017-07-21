const express = require('express'),
      bodyParser = require('body-parser'),
      massive = require('massive'),
      config = require('./config.js'),
      cors = require('cors')

const app = express()

app.use((req, res, next)=>{
    console.log(req.url);
    console.log(req.domain);
    next();
})
const server = require('http').Server(app)
const io = require('socket.io')(server, {serveClient:true})
    //   io = new SocketIOServer(server, { serveClient: false });

// massive(config.database).then(db => {
//     app.set('db', db)
// }).catch((err) => {
//     console.log(err)
// })

var port = 3010;

app.use(bodyParser.json())
app.use(cors({origin: true, credentials: true}));

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept-Type');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     next();
// })

// const controller = require('./controller.js')


connections = [];
// io.set('origins', '*:*');
// io.origins('*:*')
// io.set('origins', 'localhost:3005');



io.on('connection', socket => {
  console.log('A user connected')

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
});


// app.get('/messages', controller.getAllMessages)
// app.post('/messages', controller.createMessage)


app.listen(port, function() {
  console.log("Started server on port", port);
});