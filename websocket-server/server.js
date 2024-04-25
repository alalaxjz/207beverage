const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 }); // 設置WebSocket服務器端口

wss.on('connection', function connection(ws) {
    console.log('Client connected to WebSocket server');

    ws.on('message', function incoming(message) {
        // 接收來自前台的消息，這裡我們只是將消息返回給前台
        console.log('Received message from client: %s', message);
        ws.send(message); // 將消息發送給連接的前台客戶端
    });
});
