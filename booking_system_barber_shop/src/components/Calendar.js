import React from 'react';
import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

const CalendarComponent = () => {
  return <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' />;
};

export default CalendarComponent;
