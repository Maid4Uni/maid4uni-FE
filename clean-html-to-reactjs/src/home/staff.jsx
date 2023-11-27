import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import api from "../config/api";
import { useParams } from "react-router-dom";
import { Modal, CircularProgress, Button } from "@mui/material";

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [events, setEvents] = useState([]);
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true); // Khởi đầu với loading true để hiển thị thanh loading khi trang đang tải
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getTask(id);
        setTask(response.data);

        const formattedEvents = response.data.map((item) => ({
          id: item.id,
          title: item.service.name,
          start: moment(
            item.orderDetail.workDay + "T" + item.orderDetail.startTime
          ).toDate(),
          end: moment(
            item.orderDetail.workDay + "T" + item.orderDetail.endTime
          ).toDate(),
        }));
        setEvents(formattedEvents);
        setLoading(false); // Kết thúc loading khi API call hoàn thành
      } catch (error) {
        console.error(error);
        setLoading(false); // Kết thúc loading nếu có lỗi xảy ra
      }
    };
    fetchData();
  }, [id]);

  const handleEventClick = (event) => {
    const selectedTask = task.find((item) => item.id === event.id);
    if (selectedTask) {
      setSelectedTask(selectedTask);
      setShowPopup(true);
      console.log(selectedTask);
    } else {
      console.error("Không tìm thấy thông tin sự kiện trong danh sách task.");
    }
  };

  return (
    <>
      <Modal
        open={showPopup && selectedTask}
        onClose={() => setShowPopup(false)}
        aria-labelledby="task-details"
        aria-describedby="task-details-description"
      >
        <div
          className="popup"
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {loading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <CircularProgress /> {/* Hiển thị thanh loading */}
            </div>
          )}
          {!loading && (
            <>
              <h2>Task Details</h2>
              <p>
                Trạng thái:{" "}
                {selectedTask && selectedTask.status === false
                  ? "Đang tiến hành"
                  : selectedTask && selectedTask.status === true
                  ? "Đã hoàn thành"
                  : "Không xác định"}
              </p>
              <p>
                Địa chỉ:{" "}
                {selectedTask?.orderDetail?.order?.address ||
                  "Không có địa chỉ"}
              </p>
              <p>
                Giờ làm: {selectedTask?.orderDetail?.startTime || "Rỗng"} -{" "}
                {selectedTask?.orderDetail?.endTime || "Rỗng"}{" "}
              </p>

              <Button
                variant="contained"
                onClick={async () => {
                  try {
                    const eventId = selectedTask.id;
                    const updatedEvent = { ...selectedTask, status: true };
                    setLoading(true); // Bắt đầu loading khi gọi API
                    await api.updateTask(eventId, updatedEvent);
                    const updatedEvents = events.map((ev) =>
                      ev.id === eventId ? updatedEvent : ev
                    );
                    setEvents(updatedEvents);
                    setSelectedTask({ ...selectedTask, status: true });
                    setLoading(false);
                    setShowPopup(false);
                  } catch (error) {
                    console.error("Error updating event status:", error);
                    setLoading(false); // Kết thúc loading nếu có lỗi xảy ra
                  }
                }}
              >
                Đánh dấu đã hoàn thành
              </Button>
              <Button onClick={() => setShowPopup(false)}>Đóng</Button>
            </>
          )}
        </div>
      </Modal>
      <div style={{ height: 700, margin: "20px" }}>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <CircularProgress /> {/* Hiển thị thanh loading */}
          </div>
        ) : (
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            views={["month", "week", "day"]}
            defaultView="month"
            onSelectEvent={(event) => handleEventClick(event)}
          />
        )}
      </div>
    </>
  );
};

export default MyCalendar;
