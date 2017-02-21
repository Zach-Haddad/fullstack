import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

// make a new array of event objects abstracted from current props!
// only keep name, new Date (constructed from date + " " + time)
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
      />
  );
};

export default GroupCalendar;
