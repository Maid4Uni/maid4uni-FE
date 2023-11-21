import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  TableHead,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import api from "../config/api";
import { useRequest } from "ahooks";

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrderData] = useState([]);
  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();


  const handleGoBack = () => {
    navigate(`/manager/package/0}`);
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
  const { data } = useRequest(async () => {
    try {
      const response = await api.getOrderList(id);
      localStorage.setItem("order", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  });
  return (
    <Container maxWidth="md">
      <Typography variant="h6" align="center" style={{ margin: "20px 0", fontSize: "30px" }}>
        Chi tiết đơn hàng
      </Typography>
      <Paper style={{ marginBottom: "20px" }}>
        
        <Table>
          <TableBody>
            <TableRow>
              <TableCell>Mã đơn hàng</TableCell>
              <TableCell>123456</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tên khách hàng</TableCell>
              <TableCell>Nguyễn Văn A</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Địa chỉ</TableCell>
              <TableCell>Hẻm 111, Đường HHH, TP HCM</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>

      {/* Grid for Work Schedule */}
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item xs={12} >
          <Typography variant="h6">Lịch làm việc</Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Ngày bắt đầu</TableCell>
                <TableCell>Thời gian</TableCell>
                <TableCell>Trạng thái đơn hàng</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.map((detail, index) => (
                <TableRow key={index}>
                  <TableCell>{detail.workDay}</TableCell>
                  <TableCell>{detail.startTime}- {detail.endTime}</TableCell>
                  <TableCell>{detail.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>

      {/* Add more Grid items for other sections if needed */}

      <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
        <Button variant="contained" color="primary" onClick={handleGoBack}>
          Quay lại
        </Button>
      </div>
    </Container>
  );
};

export default OrderDetail;
