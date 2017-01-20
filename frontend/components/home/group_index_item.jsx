import React from 'react';
import { Link } from 'react-router';

const GroupIndexItem = ({group, router}) => (
  <li className="group-index-item">
      <h3 className='group-link'>
        <Link to={`/groups/${group.id}`}>
        {group.name}
        </Link>
      </h3>
      <p>{group.description}</p>
  </li>
);

export default GroupIndexItem;
