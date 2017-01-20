// list of upcoming events
import React from 'react';
import { Link } from 'react-router';
import EventIndexContainer from '../home/event_index_container';

class GroupPageContent extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const groupId = this.props.group.id;
    this.props.fetchGroup(groupId);
  }

  render(){
    const group = this.props.group;
    const events = (this.props.group.events[0] ? (
      <ul>
        <div className='group-events-header'>Events:</div>
        <EventIndexContainer group={group} />
      </ul>
    ) : null);
    return (
      <div className='group-events'>
        {events}
      </div>
    );
  }
}

export default GroupPageContent;
