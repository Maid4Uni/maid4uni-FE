import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import api from "../config/api";
import { useNavigate, useParams } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  LocalOffer as LocalOfferIcon,
  Assignment as AssignmentIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";

const localizer = momentLocalizer(moment);



const MyCalendar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [isMenu, setMenu] = useState("package");

  const { id } = useParams();
  const [task, setTask] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getTask(id);
        setTask(response.data);
        console.log(response.data);
        localStorage.setItem("order", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const uniqueEvents = {};
  task.forEach((item) => {
    const eventId = item.id; // 
    if (!uniqueEvents[eventId]) {
      const startDate = new Date(item.orderDetail.workDay + 'T' + item.orderDetail.startTime);
      const endDate = new Date(item.orderDetail.workDay + 'T' + item.orderDetail.endTime);
      uniqueEvents[eventId] = {
        title: item.service.name,
        start: startDate,
        end: endDate,

      };
    }
  });

  const events = Object.values(uniqueEvents);

  console.log(events);
  const handleEventClick = async (event) => {
    try {
      // Find the task by its ID from the event
      const taskId = event.id; // Assuming event.id corresponds to the task ID
      const taskToUpdate = task.find((item) => item.id === taskId);

      if (taskToUpdate) {
        // Update the task status
        const updatedTask = { ...taskToUpdate, status: true }; // Update status to true

        // Perform an API call to update the task status
        await api.updateTaskStatus(taskId, updatedTask); // Replace with your actual API call

        // Update the local state with the modified task
        const updatedTaskList = task.map((item) =>
          item.id === taskId ? updatedTask : item
        );
        setTask(updatedTaskList);
      }
    } catch (error) {
      console.error("Error updating task status:", error);
    }
  };

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quản lý
          </Typography>
          <Button
            color="inherit"
            onClick={handleMenuClick}
            aria-controls="personal-menu"
            aria-haspopup="true"
          >
            {user ? user.username : "Manager"}
          </Button>
          <Menu
            id="personal-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Trang cá nhân</MenuItem>
            <MenuItem
              onClick={() => {
                handleLogout();
                handleMenuClose();
              }}
            >
              Đăng xuất
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box display="flex">
          <Drawer
            variant="temporary"
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <List>
              <ListItemButton
                onClick={() => setMenu("package")}
                selected={isMenu === "package"}
              >
                <ListItemIcon>
                  <LocalOfferIcon />
                </ListItemIcon>
                <ListItemText primary="Quản lý gói dịch vụ" />
              </ListItemButton>
              <ListItemButton
                onClick={() => setMenu("order")}
                selected={isMenu === "order"}
              >
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Quản lý đơn hàng" />
              </ListItemButton>
              <ListItemButton
                onClick={() => setMenu("service")}
                selected={isMenu === "service"}
              >
                <ListItemIcon>
                  <LocalOfferIcon />
                </ListItemIcon>
                <ListItemText primary="Quản lý dịch vụ" />
              </ListItemButton>
            </List>
          </Drawer>

          <Box
            sx={{
              width: "100%",
              padding: 2,
            }}
          >
            {isMenu === "service"}
            {isMenu === "order"}
            {isMenu === "package"}
          </Box>
        </Box>
      </Container>
      <div style={{ height:700, margin:"20px" }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          views={['month', 'week', 'day']}
          defaultView="month"
          onSelectEvent={handleEventClick} 

        />
      </div>
    </>
  );
};

export default MyCalendar;
