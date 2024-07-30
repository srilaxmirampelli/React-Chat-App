const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Socket.io Server</h1>');
});

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('message', (msg) => {
    console.log(`Message received: ${msg}`);
    // Broadcast the message to all clients
    io.emit('message', msg);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
