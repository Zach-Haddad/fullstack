import * as APIUtil from '../util/group_api_util';

// constants
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_GROUP_ERRORS = "RECEIVE_GROUP_ERRORS";
export const RECEIVE_GROUP_USERS = "RECEIVE_GROUP_USERS";
export const REMOVE_GROUP = "REMOVE_GROUP";

// ACs

export const receiveGroups = (groups) => ({
  type: RECEIVE_GROUPS,
  groups
});

export const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

export const receiveGroupErrors = (errors) => ({
  type: RECEIVE_GROUP_ERRORS,
  errors
});

export const receiveGroupUsers = (users) => ({
  type: RECEIVE_GROUP_USERS,
  users
});

export const removeGroup = (group) => ({
  type: REMOVE_GROUP,
  group
});

// thunk ACs

export const fetchGroup = groupId => dispatch => (
  APIUtil.fetchGroup(groupId)
    .then(group => dispatch(receiveGroup(group)))
);

// filter here
export const fetchGroups = () => dispatch => (
  APIUtil.fetchGroups()
    .then(groups => dispatch(receiveGroups(groups)))
);

export const createGroup = (group) => dispatch => (
  APIUtil.createGroup(group)
    .then(
      newGroup => dispatch(receiveGroup(newGroup)),
      err => dispatch(receiveGroupErrors(err.responseJSON))
  )
);

export const editGroup = (group) => dispatch => (
  APIUtil.editGroup(group)
    .then(
      editedGroup => dispatch(receiveGroup(editedGroup)),
      err => dispatch(receiveGroupErrors(err.responseJSON))
    )
);

export const deleteGroup = (groupId) => dispatch => (
  APIUtil.deleteGroup(groupId)
    .then(
      group => dispatch(removeGroup(group)),
      err => dispatch(receiveGroupErrors(err.responseJSON))
    )
);

export const addUserToGroup = (groupId) => dispatch => (
  APIUtil.addUserToGroup(groupId)
    .then(
      users => dispatch(receiveGroupUsers(users)),
      err => dispatch(receiveGroupErrors(err.responseJSON))
    )
);

export const removeUserFromGroup = (groupId) => dispatch => (
  APIUtil.removeUserFromGroup(groupId)
    .then(
      users => dispatch(receiveGroupUsers(users)),
      err => dispatch(receiveGroupErrors(err.responseJSON))
    )
);
