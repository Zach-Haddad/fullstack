import { merge } from 'lodash';
import { CLEAR_ERRORS, RECEIVE_ERRORS } from '../actions/session_actions.js';

const ErrorReducer = (state = [], action) => {
  switch (action.type) {
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default ErrorReducer;
