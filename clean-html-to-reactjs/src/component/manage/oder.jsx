import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../../config/api";
import { useRequest } from "ahooks";

const Order = () => {
  const { data: orderList } = useRequest(async () => {
    try {
      const response = await api.getAllPackage();
      localStorage.setItem("package", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
    }
  });
  const navigate = useNavigate();

  // Hàm để điều hướng sang trang chi tiết
  const handleDetail = async (orderId) => {
    try {
      // Call the API to update the order status to "thanh toán thành công"
      await api.updateOrderStatus(orderId, 'thanh toán thành công');

      // Navigate to the order detail page
      navigate(`/manager/oder-detail/${orderId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Typography variant="h5" sx={{ marginBottom: "20px", textAlign: "center", fontSize: "50px" }}>Quản lý đơn hàng</Typography>
      <div className="input-group mb-3" style={{ marginBottom: "20px", width: "20%" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm..."
        // value={searchText}
        // onChange={handleSearchTextChange}
        />

      </div>
      <div className="col-2">
        <FormControl variant="outlined" style={{ width: "100%" }}>
          <InputLabel id="trang-thai-label">Trạng thái</InputLabel>
          <Select
            labelId="trang-thai-label"
            label="Trạng thái"
            value="all"
            fullWidth
          >
            <MenuItem value="all">Tất cả</MenuItem>
            <MenuItem value="chua-xac-nhan">Chưa xác nhận</MenuItem>
            <MenuItem value="da-xac-nhan">Đã xác nhận</MenuItem>
          </Select>
        </FormControl>
      </div>
      <section className="danh-sach-don-hang">
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>OrderID</TableCell>
                <TableCell>Tên gói</TableCell>
                <TableCell>Ngày bắt đầu</TableCell>
                <TableCell>Ngày kết thúc</TableCell>
                <TableCell>Trạng thái</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orderList.map((order) => (
                <TableRow key={order.orderId}>
                  <TableCell>{order.orderId}</TableCell>
                  {/* ... (other cells) */}
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        fontSize: "14px",
                        padding: "4px 4px",
                        borderRadius: "4px",
                      }}
                      onClick={() => handleDetail(order.orderId)}
                    >
                      Chi tiết
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </section>

    </>
  );
};

export default Order;
