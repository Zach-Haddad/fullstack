import React from 'react';
import { Link } from 'react-router';

const EventIndexItem = ({event, router}) => (
  <li className="group-index-item">
    <Link to={`/groups/${event.group_id}/events/${event.id}`}>
      <p>{event.name}</p>
      <p>{event.description}</p>
    </Link>
  </li>
);

export default EventIndexItem;
