import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { AddBoxRounded } from '@mui/icons-material';
import { useRequest } from 'ahooks';
import api from '../../config/api';

const Package = () => {
  const { data } = useRequest(async () => {
    try {
      const response = await api.getAllPackage();
      localStorage.setItem("package", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      console.error(error);
    }
  });
  // const [searchText, setSearchText] = React.useState('');
  // const [filterDate, setFilterDate] = React.useState('all');

  // const handleSearchTextChange = (event) => {
  //   setSearchText(event.target.value);
  // };

  // const handleFilterDateChange = (event) => {
  //   setFilterDate(event.target.value);
  // };
  // const handleCreateService = () => { }
  // const filteredRows = data.filter(() => {
  //   if (searchText.trim() !== '' && !row.packages.toLowerCase().includes(searchText.toLowerCase())) {
  //     return false;
  //   }

  //   if (filterDate === 'recent' && row.createAt >= 300) {
  //     return false;
  //   }

  //   return true;
  // });

  return (
    <>
      {/* <Typography variant="h5" sx={{ marginBottom: "20px", textAlign: "center", fontSize: "50px" }}>Quản lý dịch vụ</Typography>
        <div className="input-group mb-3" style={{ marginBottom: "20px", width: "20%" }}>
          <input
            type="text"
            className="form-control"
            placeholder="Tìm kiếm..."
            value={searchText}
            onChange={handleSearchTextChange}
          />

        </div>

        <FormControl variant="outlined" fullWidth sx={{ marginBottom: "10px", width: "20%" }}>
          <InputLabel id="filter-date-label">Lọc theo ngày tạo</InputLabel>
          <Select
            labelId="filter-date-label"
            label="Lọc theo ngày tạo"
            value={filterDate}
            // onChange={handleFilterDateChange}
            sx={{ fontSize: "14px" }}
          >
            <MenuItem value="all">Tất cả</MenuItem>
            <MenuItem value="recent">Ngày tạo gần đây</MenuItem>
          </Select>
        </FormControl>

        <div style={{ display: 'flex', justifyContent: 'end', alignItems: 'end', marginBottom: "10px" }}>
          <Button
            variant="outlined"
            startIcon={<AddBoxRounded />}
            // onClick={handleCreateService}
          >
            Tạo dịch vụ
          </Button>
        </div> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>OrderID </TableCell>
              <TableCell align="right">Gói dịch vụ</TableCell>
              <TableCell align="right">Bao gồm</TableCell>
              <TableCell align="right">Giá</TableCell>
              <TableCell align="right">Ngày tạo</TableCell>
              <TableCell align="right">Trạng thái</TableCell>
              <TableCell align="right">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data ? (
              data.map((packages, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {packages.id}
                  </TableCell>
                  <TableCell align="right">{packages.name}</TableCell>
                  <TableCell align="right">{packages.description}</TableCell>
                  <TableCell align="right">{packages.price}</TableCell>
                  <TableCell align="right">{packages.createdAt}</TableCell>
                  <TableCell align="right">{packages.updateAt}</TableCell>
                  <TableCell align="right">
                    {packages.serviceList.map((service, serviceIndex) => (
                      <div key={serviceIndex}>
                        {service.name}
                      </div>
                    ))}
                  </TableCell>
                  <TableCell align="right">
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
      </TableContainer>
    </>
  );
}
export default Package;
