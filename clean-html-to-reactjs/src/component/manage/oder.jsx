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

const Order = () => {
  const navigate = useNavigate();

  // Hàm để điều hướng sang trang chi tiết
  const handleDetail = () => {
    navigate("/manager/oder-detail");
  };

  return (
    <>
      <Typography
        variant="h5"
        sx={{ marginBottom: "20px", textAlign: "center", fontSize: "50px" }}
      >
        Quản lý đơn hàng
      </Typography>
      <div
        className="input-group mb-3"
        style={{ marginBottom: "20px", width: "20%" }}
      >
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
              <TableRow>
                <TableCell>1</TableCell>
                <TableCell>Gói 1</TableCell>
                <TableCell>2023-07-20</TableCell>
                <TableCell>2023-07-30</TableCell>
                <TableCell>Chưa xác nhận</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      fontSize: "14px",
                      padding: "4px 4px",
                      borderRadius: "4px",
                    }}
                    onClick={handleDetail} // Sử dụng hàm đã tạo để điều hướng
                  >
                    Chi tiết
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>2</TableCell>
                <TableCell>Gói 2</TableCell>
                <TableCell>2023-08-01</TableCell>
                <TableCell>2023-08-15</TableCell>
                <TableCell>Đã xác nhận</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      fontSize: "14px",
                      padding: "4px 4px",
                      borderRadius: "4px",
                    }}
                    onClick={handleDetail}
                  >
                    Chi tiết
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </section>
    </>
  );
};

export default Order;
