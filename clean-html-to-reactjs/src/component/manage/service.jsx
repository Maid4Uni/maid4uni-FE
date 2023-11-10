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

const Service = () => {
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
            const response = await api.getAllService(page);
            localStorage.setItem("service", JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }, [page]);

    const handleCreateService = () => { }

    return (
        <>
            <Typography variant="h4" sx={{ margin: "20px", textAlign: "center" }}>
                Quản lý dịch vụ
            </Typography>
            <Button
                variant="contained"
                startIcon={<AddBoxRounded />}
                onClick={handleCreateService}
                sx={{ marginBottom: "10px" }}
            >
                Tạo dịch vụ
            </Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>STT</TableCell>
                            <TableCell align="left">Dịch vụ</TableCell>
                            <TableCell align="center">Bao gồm</TableCell>
                            <TableCell align="right">Giá</TableCell>
                            <TableCell align="center">Ngày tạo</TableCell>
                            <TableCell align="right">Thao tác</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data ? (
                            data.slice(currentPage * rowsPerPage, currentPage * rowsPerPage + rowsPerPage)
                                .map((service, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {service.id}
                                        </TableCell>
                                        <TableCell align="left">{service.name}</TableCell>
                                        <TableCell align="left"> {service.description}</TableCell>
                                        <TableCell align="right">{service.price}</TableCell>
                                        <TableCell align="center">{service.createdAt}</TableCell>
                                       
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
                    sx={{
                        mx: 'auto',
                        textAlign: 'center',
                        borderTop: '1px solid rgba(224, 224, 224, 1)', // Add a border at the top
                        paddingTop: '10px', // Adjust top padding as needed
                      }}
                />
            </TableContainer>
        </>
    );
}

export default Service;
