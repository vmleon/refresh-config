import { take, put, call } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';
import { UPDATE_CONFIG } from './redux/actions';

const createWebSocketConnection = () => new WebSocket('ws://localhost:9000');

function createSocketChannel(socket) {
  return eventChannel(emit => {
    socket.onmessage = ({ data }) => emit(data);
    return () => socket.close();
  });
}

export function* saga() {
  const socket = yield call(createWebSocketConnection);
  const socketChannel = yield call(createSocketChannel, socket);

  while (true) {
    const payload = yield take(socketChannel);
    yield put({ type: UPDATE_CONFIG, payload });
  }
}
