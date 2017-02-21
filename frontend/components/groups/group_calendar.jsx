import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { withRouter, hashHistory } from 'react-router';

BigCalendar.momentLocalizer(moment);

// include a link to event page!  use onSelectEvent

const GroupCalendar = props => {
  let events = []
  props.events.forEach(event => {
    debugger
    let newEvent = {
      'title': event.name,
      eventId: event.id,
      groupId: event.group_id,
      'allDay': true,
      'start': new Date(event.date.split("-").join(",")),
      'end': new Date(event.date.split("-").join(","))
    };
    events.push(newEvent);
  });

  debugger
  return(
    <BigCalendar
      events={events}
      onSelectEvent={event => hashHistory.push(`/groups/${event.groupId}/events/${event.eventId}`)}
      />
  );
};

export default GroupCalendar;
