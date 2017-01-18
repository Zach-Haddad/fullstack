import { merge } from 'lodash';
import {RECEIVE_EVENT, RECEIVE_EVENTS, RECEIVE_EVENT_ERRORS} from '../actions/event_actions';

const EventReducer = () => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT:
    case RECEIVE_EVENTS:
    case RECEIVE_EVENT_ERRORS:
    default:

  }
}
