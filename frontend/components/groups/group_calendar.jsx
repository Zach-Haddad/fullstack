import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { withRouter, hashHistory } from 'react-router';

BigCalendar.momentLocalizer(moment);

// include a link to event page!  use onSelectEvent

class GroupCalendar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let events = [];
    this.props.group.events.forEach(event => {
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

    return(
      <BigCalendar
        events={events}
        views={['month', 'week', 'day']}
        onSelectEvent={event => this.props.router.push(`/groups/${event.groupId}/events/${event.eventId}`)}
        />
    );
  }
}

export default GroupCalendar;
