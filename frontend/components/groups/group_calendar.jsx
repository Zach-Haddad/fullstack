import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);

const GroupCalendar = props => (
    <BigCalendar
      events={props.events}
      />
);

export default GroupCalendar;
