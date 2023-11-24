import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate, useParams } from "react-router-dom";
import api from "../config/api";

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrderData] = useState([]);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(`/manager/package/0`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getOrderDetail(id);
        setOrderData(response.data);
        localStorage.setItem("order", JSON.stringify(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Container maxWidth="md">
      <Typography variant="h6" align="center" style={{ margin: "20px 0", fontSize: "30px" }}>
        Chi tiết đơn hàng
      </Typography>
      <Paper elevation={3} style={{ marginBottom: "20px", padding: "20px" }}>
        <Grid container spacing={2}>
          {order.map((customer, index) => (
            <React.Fragment key={index}>
              {index === 0 && (
                <>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Đơn hàng:</Typography>
                    <Typography>{customer.order.id}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="subtitle1">Địa chỉ:</Typography>
                    <Typography>{customer.order.address}</Typography>
                  </Grid>
                </>
              )}
            </React.Fragment>
          ))}
        </Grid>
      </Paper>

      {order.map((orderDetail, index) => (
        <Accordion key={index} style={{ marginBottom: "20px" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}a-content`} id={`panel${index}a-header`}>
            <Typography variant="subtitle1">Mã chi tiết đơn hàng: {orderDetail.id}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={2}>

              <Grid item xs={6}>
                <List>
                  <ListItem>
                    <ListItemText primary={`Ngày làm: ${orderDetail.workDay}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Giờ làm việc: ${orderDetail.startTime}-${orderDetail.endTime}`} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary={`Trạng thái: ${orderDetail.status === "ON_GOING" ? "Đang thực hiện" : orderDetail.status}`} />
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
          </AccordionDetails>
        </Accordion>
      ))}
      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <Button variant="contained" color="primary" onClick={handleGoBack}>
          Quay lại
        </Button>
      </div>
    </Container>
  );
};

export default OrderDetail;
