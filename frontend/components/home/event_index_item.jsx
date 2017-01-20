import React from 'react';
import { Link } from 'react-router';

const EventIndexItem = ({event, groupId, router}) => {
  return(
    <li className="group-index-item">
      <Link to={`/groups/${groupId}/events/${event.id}`}>
        <p>{event.name}</p>
        <p>{event.description}</p>
      </Link>
    </li>
  );
};


export default EventIndexItem;
