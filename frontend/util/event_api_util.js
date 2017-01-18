export const fetchEvents = () => (
  $.ajax({
    method: 'GET',
    url: 'api/events'
  })
);

export const fetchEvent = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  })
);

// filters
// export const fetchUserEvents
// export const fetchGroupEvents
// export const fetchEventUsers


export const addUserToEvent = (data) => (
  $.ajax({
    method: 'POST',
    url: `api/rsvps`,
    data: data
  })
);


export const removeUserFromEvent = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/rsvps/${id}`,
  })
);

export const createEvent = (event, groupId) => (
  $.ajax({
    method: 'POST',
    url: `api/groups/${groupId}/events/${event.id}`,
    data: { event }
  })
);

export const editEvent = (event) => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
    data: { event }
  })
);

export const deleteEvent = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`
  })
);