import React, { useState } from "react";
import {
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
  Typography,
  CircularProgress,
  TablePagination,
  IconButton,
  Button,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../config/api";
import { useRequest } from "ahooks";

const Order = () => {
  const [sortData, setSortedData] = useState([]);
  const { page } = useParams();
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [currentPage, setCurrentPage] = React.useState(0);
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };
  const { data, loading, error } = useRequest(async () => {
    try {
      const response = await api.getAllOrder(page);
      localStorage.setItem("order", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
    }
  });
  const navigate = useNavigate();
  
  const sortedDataByOrderID = data ? [...data].sort((a, b) => a.id - b.id) : [];
  const sortedData = sortedDataByOrderID;

  const handleUpdateOrderStatus = async (orderId, newStatus) => {
    try {
      const response = await api.updateOrderStatus(orderId, newStatus);
      if (response.status === 200) {

        const updatedOrder = sortedData.find((order) => order.id === orderId);
        updatedOrder.orderStatus = newStatus;
        setSortedData(sortedData);
      } else {
        console.error("Error updating order status:", response.error);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleDetail = async (orderId) => {
    try {
      await api.getOrderDetail(orderId);
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
            <MenuItem value="DECLINED">Từ chối</MenuItem>
            <MenuItem value="WAITING_FOR_APPROVAL">Chờ duyệt</MenuItem>
            <MenuItem value="APPROVED">Đồng ý</MenuItem>

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
                <TableCell>Giá</TableCell>
                <TableCell>Trạng thái</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                loading ? (
                  <TableRow>
                    <TableCell colSpan={6}>
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                ) : error ? (
                  <TableRow>
                    <TableCell colSpan={6}>Error loading data...</TableCell>
                  </TableRow>
                ) : sortedData ? (
                  sortedData
                    .slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
                    .map((order, index) => (
                      <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {order.id}
                        </TableCell>
                        <TableCell align="left">
                          {Array.isArray(order.pkgRes) ? (
                            order.pkgRes.map((pkg, pkgIndex) => (
                              <div key={pkgIndex}>{pkg.name}</div>
                            ))
                          ) : (
                            <div>{order.pkgRes.name}</div> // Assuming order.pkgRes contains a single object
                          )}
                        </TableCell>
                        <TableCell>{order.startDay}</TableCell>
                        <TableCell>{order.endDay}</TableCell>
                        <TableCell align="left">{order.price}</TableCell>
                        <TableCell align="center">
                          <Select
                          value={order.orderStatus} // Set current status as default value
                          onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                        >
                          <MenuItem value="chua-xac-nhan">Chưa xác nhận</MenuItem>
                          <MenuItem value="da-xac-nhan">Đã xác nhận</MenuItem>
                          {/* Add other status options */}
                        </Select></TableCell>
                        <TableCell align="left">
                          <Button onClick={handleDetail}>Chi tiết</Button>
                        </TableCell>
                      </TableRow>
                    ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6}>No data available</TableCell>
                  </TableRow>
                )
              }

            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[10, 25]}
            component="div"
            count={data ? data.length : 0}
            rowsPerPage={rowsPerPage}
            page={currentPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />


        </TableContainer>
      </section>

    </>
  );
};

export default Order;
