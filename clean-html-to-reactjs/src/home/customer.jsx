import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  CssBaseline,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  LocalOffer as LocalOfferIcon,
  Assignment as AssignmentIcon,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import api from "../config/api";
import History from "../order/history";
import TrackingPage from "../order/tracking";

const Customer = () => {
  const { id } = useParams();
  const [isMenu, setMenu] = useState("tracking");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const data = async (values) => {
    try {
      const response = await api.login(values);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.account));
      navigate(`customer/${id}`);
    } catch (error) {
      console.error(error);
    }
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");

    navigate("/");
  };
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon />
          </Button>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              color="inherit"
              onClick={handleMenuClick}
              aria-controls="personal-menu"
              aria-haspopup="true"
            >
              {user ? user.username : "Customer"}
            </Button>
          </Box>
          <Menu
            id="personal-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Trang cá nhân</MenuItem>
            <MenuItem
              onClick={() => {
                handleLogout();
                handleMenuClose();
              }}
            >
              Đăng xuất
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg">
        <Box display="flex">
          <Drawer
            variant="temporary"
            anchor="left"
            open={drawerOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
          >
            <List>
              <ListItemButton
                onClick={() => setMenu("tracking")}
                selected={isMenu === "tracking"}
              >
                <ListItemIcon>
                  <LocalOfferIcon />
                </ListItemIcon>
                <ListItemText primary="Chi tiết đơn hàng" />
              </ListItemButton>
              <ListItemButton
                onClick={() => setMenu("history")}
                selected={isMenu === "history"}
              >
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Lịch sử đơn hàng" />
              </ListItemButton>
            </List>
          </Drawer>

          <Box
            sx={{
              width: "100%",
              padding: 2,
            }}
          >
            {isMenu === "history" && <History />}
            {isMenu === "tracking" && <TrackingPage />}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Customer;
