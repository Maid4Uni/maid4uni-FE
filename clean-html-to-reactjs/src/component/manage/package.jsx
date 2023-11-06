import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, Button, TablePagination } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { AddBoxRounded } from '@mui/icons-material';
import { useRequest } from 'ahooks';
import api from '../../config/api';
import { useParams } from 'react-router-dom';

const Package = () => {
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

  const { data } = useRequest(async () => {
    try {
      const response = await api.getAllPackage({ page: currentPage + 1 });
      localStorage.setItem("package", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
    }
  });

  const handleCreateService = () => { }

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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell align="right">Gói dịch vụ</TableCell>
              <TableCell align="right">Bao gồm</TableCell>
              <TableCell align="right">Giá</TableCell>
              <TableCell align="center">Ngày tạo</TableCell>
              <TableCell align="right">Trạng thái</TableCell>
              <TableCell align="right">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? (
              data
                .slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
                .map((packages, index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {packages.id}
                    </TableCell>
                    <TableCell align="right">{packages.name}</TableCell>
                    <TableCell align="right">
                      {packages.serviceList.map((service, serviceIndex) => (
                        <div key={serviceIndex}>{service.name}</div>
                      ))}
                    </TableCell>
                    <TableCell align="right">{packages.price}</TableCell>
                    <TableCell align="center">{packages.createdAt}</TableCell>
                    <TableCell align="right">{packages.updateAt}</TableCell>
                    <TableCell align="right">{packages.status}</TableCell>
                    <TableCell align="left">
                      <DeleteIcon sx={{ cursor: "pointer" }} />
                      <EditIcon sx={{ cursor: "pointer" }} />
                    </TableCell>
                  </TableRow>
                ))
            ) : (
              <TableRow>
                <TableCell colSpan={7}>Loading data...</TableCell>
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
    </>
  );
};

export default Package;
