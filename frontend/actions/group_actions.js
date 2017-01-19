import * as APIUtil from '../util/group_api_util';
import { hashHistory } from 'react-router';

// constants
export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

// ACs

export const receiveGroups = (groups) => ({
  type: RECEIVE_GROUPS,
  groups
});

export const receiveGroup = (group) => ({
  type: RECEIVE_GROUP,
  group
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

// thunk ACs

export const fetchGroup = groupId => dispatch => (
  APIUtil.fetchGroup(groupId)
    .then(group => dispatch(receiveGroup(group)))
);

// filter here vv
export const fetchGroups = (data) => dispatch => (
  APIUtil.fetchGroups(data)
    .then(groups => dispatch(receiveGroups(groups)))
);

export const createGroup = (group) => dispatch => (
  APIUtil.createGroup(group)
    .then(
      newGroup => dispatch(receiveGroup(newGroup)),
      err => dispatch(receiveErrors(err.responseJSON))
  )
);

export const editGroup = (group) => dispatch => (
  APIUtil.editGroup(group)
    .then(
      editedGroup => dispatch(receiveGroup(editedGroup)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const deleteGroup = (groupId) => dispatch => (
  APIUtil.deleteGroup(groupId)
    .then(
      (groups) => dispatch(receiveGroups(groups))
      // err => dispatch(receiveErrors(err.responseJSON))
    )
    .then(hashHistory.push('/home'))
);

export const addUserToGroup = (data) => dispatch => (
  APIUtil.addUserToGroup(data)
    .then(
      info => dispatch(receiveGroup(info))
      // err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const removeUserFromGroup = (id) => dispatch => (
  APIUtil.removeUserFromGroup(id)
    .then(
      data => dispatch(receiveGroup(data)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
);
