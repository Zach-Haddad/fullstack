import {RECEIVE_EVENTS} from '../actions/event_actions';

const EventReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    default:
      return state;
  }
};

export default EventReducer;
