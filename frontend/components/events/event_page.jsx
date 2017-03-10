import React from 'react';
import { Link } from 'react-router';

class EventPage extends React.Component {
  constructor(props){
    super(props);
    this.addUserToEvent = this.addUserToEvent.bind(this);
    this.removeUserFromEvent = this.removeUserFromEvent.bind(this);
    this.deleteEvent = this.deleteEvent.bind(this);
    this.groupHome = this.groupHome.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.params.eventId);
  }

  addUserToEvent(){
    this.props.addUserToEvent({event_id: this.props.event.id, user_id: this.props.currentUser.id, group_id: this.props.event.group.id});
  }

  removeUserFromEvent(){
    this.props.removeUserFromEvent({event_id: this.props.event.id, user_id: this.props.currentUser.id, group_id: this.props.event.group.id});
  }

  rsvpToggle(){
    if (this.props.event.attendees){
      const userId = this.props.currentUser.id;
      if (this.props.event.event_owner_id !== userId){
          if (this.props.event.attendeeIds.includes(userId)){
              return(<button onClick={this.removeUserFromEvent}>I'm not going!</button>)
            } else {
              return(<button onClick={this.addUserToEvent}>I'm going!</button>);
          }
      } else {
        return (<button onClick={this.deleteEvent}>Delete Event</button>);
      }
    }
  }

  editButton(){
    const eventEditRoute = () => {(
      this.props.router.push(`groups/${this.props.params.groupId}/events/${this.props.event.id}/edit`)
    );};
    if (this.props.event.event_owner_id === this.props.currentUser.id) {
      return(
        <button onClick={eventEditRoute}>Edit Event</button>
      );
    }
  }

  deleteEvent(){
    this.props.deleteEvent(this.props.event.id)
      .then(() => this.props.router.push(`groups/${this.props.event.group.id}`));
  }

  groupHome(){
    const groupHomeRoute = () => {(
      this.props.router.push(`groups/${this.props.currentGroupId}`)
    );};
    return(
      <button onClick={groupHomeRoute}>Group Home</button>
    );
  }

  render(){
    const { event, children } = this.props;
    if (event.name === undefined || event.attendees === undefined){
      return(
        <div></div>
      );
    } else {
      return(
      <div className='event-page'>
        <h2>{event.name}</h2>
        <h4>{event.description}</h4>
        <ul className='event-details'>
          <li>Location: {event.location}</li>
          <li>Date: {event.date}</li>
          <li>Time: {event.time}</li>
          <li>Attendees: {event.attendees.length}</li>
        </ul>
        <div className="event-nav">
          {this.rsvpToggle()}
          {this.editButton()}
          {this.groupHome()}
        </div>

        {children}
      </div>
      );
    }
  }

}

export default EventPage;
