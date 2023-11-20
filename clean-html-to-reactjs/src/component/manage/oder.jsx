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
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../config/api";
import { useRequest } from "ahooks";

const Order = () => {
  const { page } = useParams();
  const [orderStatus, setStatus] = useState(""); // Define orderStatus
  const [id, setOrderId] = useState("");
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

  // const orderStatus= parseInt(status);


  const handleUpdateOrderStatus = async (id, orderStatus) => {
    try {
      const response = await api.updateOrderStatus({ id, orderStatus });
      console.log(response);
    } catch (error) {
      console.error(error);
      alert("Error updating order status");
    }
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
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6}>
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={6}>Error loading data...</TableCell>
                </TableRow>
              ) : data ? (
                data
                  .slice(
                    currentPage * rowsPerPage,
                    currentPage * rowsPerPage + rowsPerPage
                  )
                  .map((order, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
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
                      <TableCell align="left">
                        {order.orderStatus === "APPROVED" ? (
                          <Link to={`manager/order-detail/${order.id}`}>
                            Chi tiết
                          </Link>
                        ) : (
                          "---"
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {order.orderStatus !== "APPROVED" && (

                          <Select
                            labelId="trang-thai-label"
                            label="Trạng thái"
                            value={
                              order.orderStatus === "DECLINED"
                                ? "DECLINED"
                                : order.orderStatus === "WAITING_FOR_APPROVAL"
                                  ? "WAITING_FOR_APPROVAL"
                                  : "APPROVED"
                            }
                            fullWidth
                            disabled={order.orderStatus === "APPROVED"} // Disable for APPROVED orders
                            onChange={(e) =>
                              handleUpdateOrderStatus(order.id, e.target.value)
                            }
                          >
                            <MenuItem value="DECLINED">Từ chối</MenuItem>
                            <MenuItem value="WAITING_FOR_APPROVAL">Chờ duyệt</MenuItem>
                            <MenuItem value="APPROVED">Đồng ý</MenuItem>                          </Select>
                        )}
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6}>No data available</TableCell>
                </TableRow>)}
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
      </section >
    </>
  );
};

export default Order;
