import React, { Component } from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.fetchEvents();
  }

  render() {
    const { events, children } = this.props;
    let eventList;
    if (events[0]){
      eventList = events.map(event => (
        <EventIndexItem key={event.id} event={event} groupId={this.props.group.id} />
        )
      );
    }
    return (
      <section className="group-list">
        <ul>I'm here!</ul>
        {eventList}
        {children}
      </section>
    );
  }
}

export default EventIndex;
