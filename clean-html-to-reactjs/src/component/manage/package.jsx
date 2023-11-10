import * as React from 'react';
import { Typography, Button, TablePagination, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { AddBoxRounded } from '@mui/icons-material';
import { useRequest } from 'ahooks';
import api from '../../config/api';
import { useNavigate, useParams } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Package = () => {
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

  const { data, loading, error } = useRequest(async () => {
    try {
      const response = await api.getAllPackage(page);
      localStorage.setItem("package", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error to be caught by useRequest
    }
  });

  const handleCreateService = () => {
    navigate(`/manager/package/${page || 0}`);
  };

  const handleEditPackage = (packageId) => {
    // Implement logic to navigate to the edit package page
    // Example: navigate(`/manager/edit-package/${packageId}`);
  };

  const handleDeletePackage = (packageId) => {
    // Implement logic to delete the package and update the UI
  };

  const handleLogin = () => {
    // Redirect to the login page
    navigate('/login');
  };

  return (
    <>
      <Typography variant="h4" sx={{ margin: "20px", textAlign: "center" }}>
        Quản lý gói dịch vụ
      </Typography>
      <Button
        variant="contained"
        startIcon={<AddBoxRounded />}
        onClick={handleCreateService}
        sx={{ marginBottom: "10px" }}
      >
        Tạo gói dịch vụ
      </Button>
      {localStorage.getItem("accessToken") ? (
        // Render the table only if the user is logged in
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>STT</TableCell>
                <TableCell align="left">Gói dịch vụ</TableCell>
                <TableCell align="left">Bao gồm</TableCell>
                <TableCell align="left">Giá</TableCell>
                <TableCell align="center">Ngày tạo</TableCell>
                <TableCell align="center"></TableCell>
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
                  <TableCell colSpan={7}>Error loading data...</TableCell>
                </TableRow>
              ) : data ? (
                data
                  .slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
                  .map((packages, index) => (
                    <TableRow
                      key={index}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      {/* Render package details here */}
                      <TableCell component="th" scope="row">
                        {packages.id}
                      </TableCell>
                      <TableCell align="left">{packages.name}</TableCell>
                      <TableCell align="left">
                        {packages.serviceList.map((service, serviceIndex) => (
                          <div key={serviceIndex}>{service.name}</div>
                        ))}
                      </TableCell>
                      <TableCell align="left">{packages.price}</TableCell>
                      <TableCell align="center">{packages.createdAt}</TableCell>
                      <TableCell align="left">
                        <DeleteIcon
                          sx={{ cursor: "pointer" }}
                          onClick={() => handleDeletePackage(packages.id)}
                        />
                        <EditIcon
                          sx={{ cursor: "pointer" }}
                          onClick={() => handleEditPackage(packages.id)}
                        />
                      </TableCell>
                    </TableRow>
                  ))
              ) : (
                <TableRow>
                  <TableCell colSpan={7}>No data available</TableCell>
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
        // Render a message or a login button if the user is not logged in
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

export default Package;
