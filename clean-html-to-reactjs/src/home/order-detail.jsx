import React, { useState } from "react";
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrderDetail = () => {
  const navigate = useNavigate();

  const [orderStatus, setOrderStatus] = useState("Đã đặt hàng");

  const handleStatusChange = (event) => {
    setOrderStatus(event.target.value);
  };
  const handleGoBack = () => {
    navigate("/manager#order");
  };
  return (
    <Container maxWidth="md">
      <Typography variant="h6" align="center" style={{ margin: "20px 0", fontSize:"30px" }}>
         Chi tiết đơn hàng
      </Typography>
      <Paper>
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
            <TableRow>
              <TableCell>Trạng thái đơn hàng</TableCell>
              <TableCell>{orderStatus}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Lịch làm việc</Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Ngày bắt đầu</TableCell>
                <TableCell>20-10-2023</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Ngày kết thúc</TableCell>
                <TableCell>20-12-2023</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Giờ làm</TableCell>
                <TableCell>7AM</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Số lượng nhân viên</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h6" style={{ marginTop: "20px" }}>
            Thêm nhân viên
          </Typography>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="name">Tên nhân viên</InputLabel>
            <Select
              label="Tên nhân viên"
              fullWidth
              id="name"
            ></Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
            fullWidth
          >
            Thêm
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6">Cập nhật trạng thái đơn hàng</Typography>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="status">Trạng thái đơn hàng</InputLabel>
            <Select
              label="Trạng thái đơn hàng"
              fullWidth
              id="status"
              value={orderStatus}
              onChange={handleStatusChange}
            >
              <MenuItem value="Đã đặt hàng">Đã đặt hàng</MenuItem>
              <MenuItem value="Đang làm">Đang làm</MenuItem>
              <MenuItem value="Đã hoàn thành">Đã hoàn thành</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="contained"
            color="primary"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0",
            
            }}
            fullWidth
          >
            Cập nhật
          </Button>
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 0",
        
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleGoBack}
        >
          Quay lại
        </Button>
      </div>
    </Container>
  );
};

export default OrderDetail;
