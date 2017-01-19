import {
    RECEIVE_GROUPS, RECEIVE_GROUP_ERRORS,
    REMOVE_GROUP } from '../actions/group_actions';
import { merge } from 'lodash';

const _nullGroups = Object.freeze({
  groups: [],
  errors: []
});

const GroupReducer = (state = _nullGroups, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_GROUPS:
      const groups = action.groups;
      const newVar = merge({}, state.errors, { groups });
      return newVar;
    case RECEIVE_GROUP_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case REMOVE_GROUP:
      delete newState.groups[action.group.id];
      return newState;
    default:
      return state;
  }
};

export default GroupReducer;
