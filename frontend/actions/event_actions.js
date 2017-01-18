import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_EVENT_ERRORS = "RECEIVE_EVENT_ERRORS";
// acs

export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveEventErrors = (errors) => ({
  type: RECEIVE_EVENT_ERRORS,
  errors
});

// thunk acs
export const fetchEvents = () => dispatch => (
  APIUtil.fetchEvents()
    .then(events => dispatch(receiveEvents(events)))
);

export const fetchEvent = (id) => dispatch => (
  APIUtil.fetchEvent(id)
    .then(event => dispatch(receiveEvent(event)))
);

export const addUserToEvent = (data) => (


export const removeUserFromEvent = (id) => (

export const createEvent = (event, groupId) => (

export const editEvent = (event) => (

export const deleteEvent = (id) => (
