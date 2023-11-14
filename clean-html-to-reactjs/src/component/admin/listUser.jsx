import React from "react";
import {
  TablePagination,
  Button,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  CircularProgress,
} from "@mui/material";
import { AddBoxRounded } from "@mui/icons-material";

import { useRequest } from "ahooks";
import api from "../../config/api";
import { useNavigate, useParams } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
const ListUser = () => {
  const navigate = useNavigate();
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

  const handleLogin = () => {
    // Redirect to the login page
    navigate("/login");
  };

  const handleCreateAccount = () => {
    navigate(`/admin/create-user`);
  };

  const handleEditAccount = (accountId) => {
    // Implement logic to navigate to the edit package page
    // Example: navigate(`/admin/edit-account/${accountId}`);
  };

  const { data, loading, error } = useRequest(async () => {
    try {
      const response = await api.getAccountList(page);
      localStorage.setItem("account", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  });

  return (
    <>
      <Typography variant="h4" sx={{ margin: "20px", textAlign: "center" }}>
        Danh sách tài khoản
      </Typography>
      <Button
        variant="contained"
        startIcon={<AddBoxRounded />}
        onClick={handleCreateAccount}
        sx={{ marginBottom: "10px" }}
      >
        Tạo account
      </Button>
      {localStorage.getItem("accessToken") ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Ảnh đại diện</TableCell>
                <TableCell>Tên tài khoản</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Họ và tên</TableCell>
                <TableCell>Giới tính</TableCell>
                <TableCell>Số điện thoại</TableCell>
                <TableCell>Vai trò</TableCell>
                <TableCell>Địa chỉ</TableCell>
                <TableCell style={{ minWidth: "100px" }}>Thao tác</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={7}>
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : error ? (
                <TableRow>
                  <TableCell colSpan={7}>
                    Phát sinh lỗi khi tìm data...
                  </TableCell>
                </TableRow>
              ) : data ? (
                data
                  .slice(
                    currentPage * rowsPerPage,
                    currentPage * rowsPerPage + rowsPerPage
                  )
                  .map((account, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell>
                        <img
                          src={account.img}
                          alt={account.accountname}
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      </TableCell>
                      <TableCell>{account.username}</TableCell>
                      <TableCell>{account.email}</TableCell>
                      <TableCell>{account.fullName}</TableCell>
                      <TableCell>{account.gender}</TableCell>
                      <TableCell>{account.phoneNumber}</TableCell>
                      <TableCell>{account.role}</TableCell>
                      <TableCell>{account.address}</TableCell>
                      <TableCell style={{ minWidth: "100px" }}>
                        <EditIcon
                          sx={{ cursor: "pointer" }}
                          onClick={() => handleEditAccount(account.id)}
                        />
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7}>Không có dữ liệu account</TableCell>
                </TableRow>
              )}
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
      ) : (
        <div>
          <Typography variant="h6" sx={{ margin: "20px", textAlign: "center" }}>
            Vui lòng đăng nhập để xem nội dung
          </Typography>
          <Button variant="contained" onClick={handleLogin}>
            Đăng nhập
          </Button>
        </div>
      )}
    </>
  );
};

export default ListUser;
