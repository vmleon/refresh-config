import { UPDATE_CONFIG } from './actions';

export const reducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CONFIG:
      return JSON.parse(action.payload);
    default:
      return state;
  }
};
