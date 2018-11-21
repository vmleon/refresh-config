const WebSocket = require('ws');

const log = require('pino')();
const path = require('path');
const fs = require('fs');

const wss = new WebSocket.Server({
  port: 9000,
});

wss.on('connection', function connection(ws) {
  fs.watchFile(configPath, () => sendConfig(ws));
  sendConfig(ws);
});

const sendConfig = ws => {
  fs.readFile(configPath, { encoding: 'utf8' }, (err, data) => {
    if (err) log.error(err);
    log.info(`Sending new ${configPath} content: ${data}`);
    ws.send(JSON.stringify(data, null, 0), err => log.error(err));
  });
};

// TODO env variable instead
const configPath = path.join('watchme', 'config.json');
