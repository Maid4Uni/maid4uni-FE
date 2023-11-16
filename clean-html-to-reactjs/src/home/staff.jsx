import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "@mui/material/TextField";

function Calendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Replace "YOUR_API_ENDPOINT" with the actual API endpoint
        const response = await fetch("YOUR_API_ENDPOINT");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.start);
    return (
      eventDate.getFullYear() === selectedDate.getFullYear() &&
      eventDate.getMonth() === selectedDate.getMonth() &&
      eventDate.getDate() === selectedDate.getDate()
    );
  });

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => handleDateChange(date)}
        dateFormat="MM/dd/yyyy"
        customInput={<TextField />} // Use MUI TextField for styling
      />
      <FullCalendar
        plugins={[timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        headerToolbar={{
          start: "",
          center: "title",
          end: "today prev,next",
        }}
        height="90vh"
        allDaySlot={false}
        slotDuration="00:30:00"
        events={filteredEvents}
        eventContent={renderEventContent}
      />
    </div>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default Calendar;
