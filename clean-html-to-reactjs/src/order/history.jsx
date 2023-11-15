import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Button,
  InputAdornment,
  Grid,
} from "@mui/material";
import {
  Box,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import ReorderIcon from "@mui/icons-material/Reorder";
import { ArrowDropDown, Search } from "@mui/icons-material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";

const History = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const [searchInput, setSearchInput] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const data = [
    {
      id: 1,
      order: "Order 1",
      status: "Completed",
      details: "Details 1",
      feedback: "Good",
    },
    {
      id: 2,
      order: "Order 2",
      status: "Ongoing",
      details: "Details 2",
      feedback: "",
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.order.toLowerCase().includes(searchInput.toLowerCase()) &&
      (filter === "" || item.status.toLowerCase() === filter.toLowerCase())
  );

  return (
    <Box>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        style={{ margin: 20 }}
      >
        {" "}
        <Grid item>
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
        </Grid>
        <Grid item>
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
        </Grid>
      </Grid>
      <Table
        style={{
          margin: "auto",
          marginTop: "20px",
          border: "1px solid #e0e0e0",
        }}
      >
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
                {item.status === "Completed" ? (
                  <Button
                    variant="contained"
                    onClick={() => alert("Reorder clicked")}
                  >
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
