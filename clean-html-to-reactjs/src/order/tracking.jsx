import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
  TextField,
  CssBaseline,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useNavigate, useParams } from "react-router-dom";
import api from "../config/api";
import { Container } from "@mui/system";
import FeedbackPage from "./createfb";

const steps = ["Đăng ký", "Thanh toán", "Đã duyệt", "Đang tiến hành", "Hoàn thành"];
const TrackingPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Chuyển hướng trở lại trang trước đó
  };
  const { id } = useParams();
  const [order, setOrderData] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    navigate("/");
  };
  ;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleTurnBack = () => {
    navigate("/");
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getOrderDetail(id);
        setOrderData(response.data);
        localStorage.setItem("order", JSON.stringify(response.data));
        if (order.status === "DONE" && !order.feedbackGiven) {
          // Trigger feedback action here, for example:
          alert("Please provide feedback for this order.");
          // You can implement a feedback form/modal or any other feedback mechanism
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  const uniqueWorkDays = Array.from(new Set(order.map(orderDetail => orderDetail.workDay)));

  const filteredOrders = uniqueWorkDays.map(workDay => order.find(orderDetail => orderDetail.workDay === workDay));

  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>

          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              color="inherit"
              onClick={handleMenuClick}
              aria-controls="personal-menu"
              aria-haspopup="true"
            >
              {user ? user.username : "Customer"}
            </Button>
          </Box>
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
            <MenuItem
              onClick={() => {
                handleTurnBack();
                handleMenuClose();
              }}
            >
              Quay lại
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Box marginTop={5}>
        {filteredOrders.length > 0 && (
          <Stepper activeStep={filteredOrders[0].status === 'ON_GOING' ? 3 : activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        )}
      </Box>

      <Container maxWidth="md">
        <Typography variant="h6" align="center" style={{ margin: "20px 0", fontSize: "30px" }}>
          Chi tiết đơn hàng
        </Typography>

        {filteredOrders.map((orderDetail, index) => (
          <Accordion key={index} style={{ marginBottom: "20px" }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}a-content`} id={`panel${index}a-header`}>
              <Typography variant="subtitle1">Ngày làm: {orderDetail.workDay}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <List>
                    <ListItem>
                      <ListItemText primary={`Giờ làm việc: ${orderDetail.startTime}-${orderDetail.endTime}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemText primary={`Trạng thái: ${orderDetail.status === "ON_GOING" ? "Đang thực hiện" : orderDetail.status === "DONE" ? "Đã hoàn thành" : orderDetail.status}`} />
                    </ListItem>
                  </List>
                </Grid>
                <Grid item xs={6}>
                  <List>
                    <ListItem>
                      <ListItemText primary="Công việc:" />
                    </ListItem>
                    <List>
                      {orderDetail.taskList.map((task, taskIndex) => (
                        <ListItem key={taskIndex}>
                          <ListItemText primary={task.service.name} secondary={`Nhân viên thực hiện: ${task.staff.fullName}`} />
                        </ListItem>
                      ))}
                    </List>
                  </List>
                </Grid>
              </Grid>
              {orderDetail.status === "DONE" && (
                <FeedbackPage />
              )}
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
      <Button
        variant="contained"
        onClick={handleGoBack}
        sx={{
          display: "block",
          margin: "auto",
          textAlign: "center",
          mt: 2, // Margin-top
        }}
      >
        Quay lại
      </Button>
    </>
  );
};

export default TrackingPage;
