import {
    RECEIVE_GROUPS, RECEIVE_GROUP, RECEIVE_GROUP_ERRORS,
    RECEIVE_GROUP_USERS, REMOVE_GROUP } from '../actions/group_actions';
import { merge } from 'lodash';

const _nullGroups = Object.freeze({
  groups: [],
  errors: [],
  currentGroup: {},
  users: []
});

const GroupReducer = (state = _nullGroups, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch (action.type) {
    case RECEIVE_GROUPS:
      const groups = action.groups;
      return merge({}, state, { groups });
    case RECEIVE_GROUP:
      const currentGroup = action.group;
      return merge({}, state, { currentGroup });
    case RECEIVE_GROUP_ERRORS:
      const errors = action.errors;
      return merge({}, state, { errors });
    case RECEIVE_GROUP_USERS:
      const users = action.users;
      return merge({}, state, { users });
    case REMOVE_GROUP:
      delete newState.groups[action.group.id];
      return newState;
    default:
      return state;
  }
};

export default GroupReducer;
