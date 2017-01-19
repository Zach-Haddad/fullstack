import * as APIUtil from '../util/event_api_util';

export const RECEIVE_EVENT = "RECEIVE_EVENT";
export const RECEIVE_EVENTS = "RECEIVE_EVENTS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
// acs

export const receiveEvents = (events) => ({
  type: RECEIVE_EVENTS,
  events
});

export const receiveEvent = (event) => ({
  type: RECEIVE_EVENT,
  event
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
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

export const addUserToEvent = (data) => dispatch => (
  APIUtil.addUserToEvent(data)
    .then(
      info => dispatch(receiveEvent(info))
      // err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const removeUserFromEvent = (id) => dispatch => (
  APIUtil.removeUserFromEvent(id)
    .then(
      data => dispatch(receiveEvent(data))
      // err => dispatch(receiveErrors(err.responseJSON))
    )
);

export const createEvent = (event) => dispatch => (
  APIUtil.createEvent(event)
    .then(
      newEvent => dispatch(receiveEvent(newEvent)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
  );

// export const editEvent = (event) => (
//
// export const deleteEvent = (id) => (

export const deleteEvent = (eventId) => dispatch => (
  APIUtil.deleteEvent(eventId)
    .then(
      (events) => dispatch(receiveEvents(events))
      // err => dispatch(receiveErrors(err.responseJSON))
    )
    // .then(hashHistory.push('/home'))
);
