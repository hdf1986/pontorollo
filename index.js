const express = require('express')
const app = express()
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;
const points = [];

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('draw', (message) => {
    points.push(message)
    io.emit('draw', message)
  })
});

app.use(express.static('public'))

app.get('/points', (req, res) => {
  res.send(points)
})


http.listen(port, () => console.log(`Example app listening on port ${port}!`))