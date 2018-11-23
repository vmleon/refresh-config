# React + WebSocket

Simple example of update web with a backend configuration

1. Web reading config from WebSocket
2. Node app exposes a WebSocket and send config.

## Web

React app, with Redux and Redux-saga to read Websockets. Everytime a message is coming, a saga dispatch an action _UPDATE_CONFIG_ to change state in Redux.

Run the web with: `npm install`, then `npm start`.

## Backend

Node app using _ws_ to expose a WebSocket. The app watch a file for changes in `server/watchme/config.json` and send changes via WebSocket.

Run the backend with `npm install`, then `npm start`. Change JSON file to see changes on web.

### Caveats

WebSockets resilience has to be improve.
There is no validation over JSON config file.
Plenty of hard-coded values.
