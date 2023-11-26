import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState([]); // Manage order data
  const [isLoading, setLoading] = useState(false); // Loading state

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

  useEffect(() => {
    // Fetch data on initial load
    const fetchData = async () => {
      try {
        const response = await api.getAllOrder(page);
        localStorage.setItem("order", JSON.stringify(response.data));
        setData(response.data); // Set initial data
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [page]);

  const handleStatusChange = (event) => {
    setStatus(event.target.value); // Lưu giá trị trạng thái khi thay đổi
  };

const handleUpdateOrderStatus = async (id, orderStatus) => {
  setLoading(true);

  try {
    const response = await api.updateOrderStatus({ id, orderStatus });

    const updatedData = data.map(order => {
      if (order.id === id) {
        return { ...order, orderStatus };
      }
      return order;
    });

    localStorage.setItem("order", JSON.stringify(updatedData));
    setData(updatedData);
    
    console.log(response); // Log the response or handle it as needed
  } catch (error) {
    console.error(error);
    alert("Error updating order status");
  } finally {
    setLoading(false);
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
              onChange={handleStatusChange}
            >
              <MenuItem value="all">Tất cả</MenuItem>
              <MenuItem value={0}>Từ chối</MenuItem>
              <MenuItem value="WAITING_FOR_APPROVAL">Chờ duyệt</MenuItem>
              <MenuItem value="APPROVED">Đồng ý</MenuItem>
            </Select>
          </FormControl>
        </div>
        <section className="danh-sach-don-hang">
        {isLoading && <CircularProgress />}
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


                {data
                  .slice(
                    currentPage * rowsPerPage,
                    currentPage * rowsPerPage + rowsPerPage
                  )
                  .map((order, index) => (
                    <TableRow key={index}
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
                        {order.orderStatus !== "APPROVED" && (

                          <Select
                            labelId="trang-thai-label"
                            label="Trạng thái"
                            value={
                              order.orderStatus === "DECLINED"
                                ? 0
                                : order.orderStatus === "WAITING_FOR_APPROVAL"
                                  ? 1
                                  : order.orderStatus === "APPROVED" ? 2 : 3
                            }
                            fullWidth
                            disabled={order.orderStatus === "APPROVED"}
                            onChange={(e) =>
                              handleUpdateOrderStatus(order.id, e.target.value)
                            }
                          >
                            <MenuItem value={0}>Từ chối</MenuItem>
                            <MenuItem value={1}>Chờ duyệt</MenuItem>
                            <MenuItem value={2}>Đồng ý</MenuItem>
                            <MenuItem value={3}>Hoàn tiền</MenuItem>
                          </Select>
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {order.orderStatus === "APPROVED" ? (
                          <Link to={`/order-detail/${order.id}`}>
                            Chi tiết
                          </Link>
                        ) : (
                          "---"
                        )}
                      </TableCell>
                    </TableRow>
                  ))
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
        </section >
      </section>
    </>
  );
};

export default Order;
