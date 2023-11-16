import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableCell, TableRow, TextField, FormControl, InputLabel, Select, Button, InputAdornment, Grid } from '@mui/material';
import { Box, Typography, AppBar, Toolbar, IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, } from "@mui/material";
import ReorderIcon from '@mui/icons-material/Reorder';
import { ArrowDropDown, Search } from "@mui/icons-material";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HistoryIcon from '@mui/icons-material/History';
import { Link, useParams } from "react-router-dom";
import api from '../config/api';
import { useRequest } from 'ahooks';

const History = () => {
    const { id } = useParams();
    const { data } = useRequest(async () => {
        try {
            const response = await api.getOrderList(id);
            localStorage.setItem("order", JSON.stringify(response.data));
            return response.data;
        } catch (error) {
            console.error(error);
            throw error;
        }
    });




    // const [searchInput, setSearchInput] = useState('');
    // const [filter, setFilter] = useState('');

    // const handleSearch = (e) => {
    //     setSearchInput(e.target.value);
    // };

    // const handleFilterChange = (e) => {
    //     setFilter(e.target.value);
    // };

    // const data = [
    //     { id: 1, order: 'Order 1', status: 'Completed', details: 'Details 1', feedback: 'Good' },
    //     { id: 2, order: 'Order 2', status: 'Ongoing', details: 'Details 2', feedback: '' },
    // ];

    // const filteredData = data.filter((item) =>
    //     item.order.toLowerCase().includes(searchInput.toLowerCase()) &&
    //     (filter === '' || item.status.toLowerCase() === filter.toLowerCase())
    // );

    return (
        <Box>
            <Grid container justifyContent="space-between" alignItems="center" style={{ margin: 10 }}>                <Grid item>
                {/* <FormControl sx={{ minWidth: 120 }}>
                    <InputLabel id="filter-label">Sắp xếp</InputLabel>
                    <Select
                        labelId="filter-label"
                        value={filter}
                        onChange={handleFilterChange}
                    >
                        <MenuItem value="">Tất cả</MenuItem>
                        <MenuItem value="completed">Đã hoàn thành</MenuItem>
                        <MenuItem value="ongoing">Đang tiến hành</MenuItem>
                    </Select>
                </FormControl> */}
            </Grid>
                {/* <Grid item>
                    <TextField
                        label="Tìm kiếm"
                        variant="outlined"
                        value={searchInput}
                        onChange={handleSearch}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid> */}
            </Grid>
            <Table style={{ margin: 'auto', marginTop: '20px', border: '1px solid #e0e0e0' }}>
                <TableHead sx={{ backgroundColor: "cornflowerblue" }}>
                    <TableRow>
                        <TableCell sx={{ color: "white" }}>Đơn hàng</TableCell>
                        <TableCell sx={{ color: "white" }}>Người đặt</TableCell>
                        <TableCell sx={{ color: "white" }}>Ngày bắt đầu</TableCell>
                        <TableCell sx={{ color: "white" }}>Ngày kết thúc</TableCell>
                        <TableCell sx={{ color: "white" }}>Địa chỉ</TableCell>
                        <TableCell sx={{ color: "white" }}>Giá</TableCell>
                        <TableCell sx={{ color: "white" }}>Trạng thái</TableCell>
                        <TableCell sx={{ color: "white" }}>Feedback</TableCell>
                        <TableCell sx={{ color: "white" }}>Thao tác</TableCell>
                    </TableRow>
                </TableHead>


                <TableBody>
                    {data && data.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell>
                                {order.pkgRes ? (
                                    <div>{order.pkgRes.name}</div>
                                ) : (
                                    <span>No package details available</span>
                                )}
                            </TableCell>
                            <TableCell>{order.customer ? order.customer.name : `no customer details`}</TableCell>
                            <TableCell sx={{ width: "100px" }}>{order.startDay}</TableCell>
                            <TableCell>{order.endDay}</TableCell>
                            <TableCell>{order.address}</TableCell>
                            <TableCell>{order.price}</TableCell>
                            <TableCell>{order.orderStatus}</TableCell>
                            <TableCell>{order.feedback}</TableCell>
                            <TableCell>
                                {order.status === 'Completed' ? (
                                    <Button variant="contained" onClick={() => alert('Reorder clicked')}>
                                        Đặt lại
                                    </Button>
                                ) : null}
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
};

export default History;
