import React from 'react';
import { Link } from 'react-router';

const EventIndexItem = ({event, groupId, router}) => {
  return(
    <li className="event-index-item">
      <Link to={`/groups/${groupId}/events/${event.id}`}>
        <p>{event.name}</p>
      </Link>
      <p>{event.description}</p>
    </li>
  );
};


export default EventIndexItem;
