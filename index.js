const express = require('express')
const app = express()
const http = require('http').createServer(app);
var io = require('socket.io')(http);
const port = 3000

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('draw', (message) => {
    io.emit('draw', message)
  })
});

app.use(express.static('public'))
// app.get('/', (req, res) => res.send('Hello People 3!'))


http.listen(port, () => console.log(`Example app listening on port ${port}!`))