import React, { useState } from 'react';
import { Table, TableHead, TableBody, TableCell, TableRow, TextField, FormControl, InputLabel, Select, Button, InputAdornment } from '@mui/material';
import {Box,Typography,AppBar,Toolbar,IconButton,Menu,MenuItem,Drawer,List, ListItem,ListItemIcon,ListItemText,Divider,} from "@mui/material";
import ReorderIcon from '@mui/icons-material/Reorder';
import { ArrowDropDown, Search } from "@mui/icons-material";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HistoryIcon from '@mui/icons-material/History';
import { Link } from "react-router-dom";
const History = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };
    const [searchInput, setSearchInput] = useState('');
    const [filter, setFilter] = useState('');

    const handleSearch = (e) => {
        setSearchInput(e.target.value);
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const data = [
        { id: 1, order: 'Order 1', status: 'Completed', details: 'Details 1', feedback: 'Good' },
        { id: 2, order: 'Order 2', status: 'Ongoing', details: 'Details 2', feedback: '' },
    ];
    const filteredData = data.filter((item) =>
        item.order.toLowerCase().includes(searchInput.toLowerCase()) &&
        (filter === '' || item.status.toLowerCase() === filter.toLowerCase())
    );
    return (
        <Box >
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerToggle}
                    >
                        <ReorderIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="div" sx={{ textAlign: "right" }}>
                            Tên khách hàng
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <ArrowDropDown />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Trang cá nhân</MenuItem>
                            <MenuItem onClick={handleClose}>Chỉnh sửa hồ sơ</MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </AppBar>
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', margin: 20 }}>
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
                    <FormControl sx={{ minWidth: 120 }}>
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
                    </FormControl>
                </div>
                <Table style={{ margin: 'auto', marginTop: '20px' }}> 
                    <TableHead>
                        <TableRow>
                            <TableCell>Đơn hàng</TableCell>
                            <TableCell>Trạng thái</TableCell>
                            <TableCell>Chi tiết</TableCell>
                            <TableCell>Feedback</TableCell>
                            <TableCell>Thao tác</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>{item.order}</TableCell>
                                <TableCell>{item.status}</TableCell>
                                <TableCell>{item.details}</TableCell>
                                <TableCell>{item.feedback}</TableCell>
                                <TableCell>
                                    {item.status === 'Completed' ? (
                                        <Button variant="contained" onClick={() => alert('Reorder clicked')}>
                                            Đặt lại
                                        </Button>
                                    ) : null}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </div>
            <Drawer open={drawerOpen} onClose={handleDrawerToggle}>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <Inventory2OutlinedIcon />
                        </ListItemIcon>
                        <Link to="/tracking" style={{ textDecoration: "none", color: "inherit" }}>
                            <ListItemText primary="Chi tiết đơn hàng" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <HistoryIcon />
                        </ListItemIcon>
                        <Link to="/history" style={{ textDecoration: "none", color: "inherit" }}>
                            <ListItemText primary="Lịch sử đơn hàng" />
                        </Link>
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
        </Box>
    );
};

export default History;
