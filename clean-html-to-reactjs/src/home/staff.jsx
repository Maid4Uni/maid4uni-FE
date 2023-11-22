import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Sự kiện 1",
    start: new Date(2023, 10, 22, 7, 0, 0), // Ngày bắt đầu, thời gian 7:00 AM
    end: new Date(2023, 10, 22, 8, 0, 0), // Ngày kết thúc, thời gian 8:00 AM
  },
  {
    title: "Sự kiện 2",
    start: new Date(2023, 10, 24), // Ngày bắt đầu (không có thông tin về thời gian)
    end: new Date(2023, 10, 25), // Ngày kết thúc (không có thông tin về thời gian)
  },
  // Add other events if needed
];

const MyCalendar = () => {
  return (
    <div style={{ height: 500 }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start" // Field in the event object to determine the start date
        endAccessor="end" // Field in the event object to determine the end date
        views={['month', 'week', 'day']} // Calendar view modes
        defaultView="month" // Default view mode
      />
    </div>
  );
};

export default MyCalendar;
