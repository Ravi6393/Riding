const WebSocket = require('ws');

// WebSocket server setup
const wss = new WebSocket.Server({ port: 3000, path: '/ws' });

wss.on('connection', ws => {
  console.log('WebSocket connection established');
  ws.on('message', message => {
    console.log(`Received message: ${message}`);
  });
  ws.send('Welcome to the WebSocket server!');
});
