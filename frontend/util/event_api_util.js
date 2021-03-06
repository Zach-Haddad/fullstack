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

export const addUserToEvent = (data) => (
  $.ajax({
    method: 'POST',
    url: `api/rsvps`,
    data: data
  })
);


export const removeUserFromEvent = (data) => (
  $.ajax({
    method: 'DELETE',
    url: `api/rsvps`,
    data
  })
);

export const createEvent = (event) => {
  return(
    $.ajax({
      method: 'POST',
      url: `api/groups/${event.group_id}/events`,
      data: { event }
    })

  );
};

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
