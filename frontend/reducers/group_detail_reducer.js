import { RECEIVE_GROUP } from '../actions/group_actions';
import { merge } from 'lodash';

const GroupDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_GROUP:
      return merge({}, action.group);
    default:
      return state;
  }
};

export default GroupDetailReducer;
