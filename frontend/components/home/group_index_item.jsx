import React from 'react';
import { Link } from 'react-router';

const GroupIndexItem = ({group, router}) => (
  <li className="group-index-item">
    <Link to={`/groups/${group.id}`}>
      <p>{group.name}</p>
      <p>{group.description}</p>
    </Link>
  </li>
);

export default GroupIndexItem;
