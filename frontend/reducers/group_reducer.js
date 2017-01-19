import { RECEIVE_GROUPS } from '../actions/group_actions';

const GroupReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_GROUPS:
      return action.groups;
    default:
      return state;
  }
};

export default GroupReducer;
