import React from 'react';
import { Link } from 'react-router';

class EventPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.params.eventId);
  }

  render(){
    const { event, children } = this.props;
    if (event.name === undefined){
      return(
        <div></div>
      );
    } else {
      return(
      <div className='event-page'>
        <ul className='event-details'>
          <li>{event.name}</li>
          <li>{event.description}</li>
          <li>{event.date}</li>
          <li>{event.time}</li>
          <li>Attendees: {event.attendees.length}</li>
          <li>RSVP to this event!</li>
        </ul>
      </div>
      );
    }
  }

}

export default EventPage;
