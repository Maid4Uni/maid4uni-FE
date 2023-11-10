import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
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
import Order from "../component/manage/oder";
import Service from "../component/manage/service"; // Corrected import
import Package from "../component/manage/package";
import { useNavigate, useParams } from "react-router-dom";
import api from "../config/api";

const Manager = () => {
  const { menu, page } = useParams();
  const navigate = useNavigate();

  const [isMenu, setMenu] = useState(page?.toString() || "package");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    if (!menu) {
      navigate(`/manager/${isMenu}/${page || ''}`);
    }
  }, [menu, isMenu, page, navigate]);

  const data = async (values) => {
    try {
      const response = await api.login(values);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("user", JSON.stringify(response.data.account));
      navigate(`/manager/${isMenu}/${page || ''}`);
    } catch (error) {
      console.error(error);
    }
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Quản lý
          </Typography>
          <Button
            color="inherit"
            onClick={handleMenuClick}
            aria-controls="personal-menu"
            aria-haspopup="true"
          >
            {user ? user.username : "Manager"}
          </Button>
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
                onClick={() => setMenu("package")}
                selected={isMenu === "package"}
              >
                <ListItemIcon>
                  <LocalOfferIcon />
                </ListItemIcon>
                <ListItemText primary="Quản lý gói dịch vụ" />
              </ListItemButton>
              <ListItemButton
                onClick={() => setMenu("order")}
                selected={isMenu === "order"}
              >
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Quản lý đơn hàng" />
              </ListItemButton>
              <ListItemButton
                onClick={() => setMenu("service")}
                selected={isMenu === "service"}
              >
                <ListItemIcon>
                  <LocalOfferIcon />
                </ListItemIcon>
                <ListItemText primary="Quản lý dịch vụ" />
              </ListItemButton>
            </List>
          </Drawer>

          <Box
            sx={{
              width: "100%",
              padding: 2,
            }}
          >
            {isMenu === "service" && <Service />}
            {isMenu === "order" && <Order />}
            {isMenu === "package" && <Package />}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Manager;
