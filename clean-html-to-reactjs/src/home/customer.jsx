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
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { useNavigate, useParams } from "react-router-dom";
import api from "../config/api";
import History from "../order/history";
import TrackingPage from "../order/tracking";
import UserProfile from "./profile";

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
  const handleTurnBack = () => {
    navigate("/");
  }
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
            <MenuItem
              onClick={() => {
                handleTurnBack();
                handleMenuClose();
              }}
            >
              Quay lại
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
                onClick={() => setMenu("history")}
                selected={isMenu === "history"}
              >
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Lịch sử đơn hàng" />
              </ListItemButton>
              <ListItemButton
                onClick={() => setMenu("profile")}
                selected={isMenu === "profile"}
              >
                <ListItemIcon>
                  <BadgeOutlinedIcon />
                </ListItemIcon>
                <ListItemText primary="Thông tin tài khoản" />
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
            {isMenu === "profile" && <UserProfile />}
          </Box>
        </Box>
      </Container>
    
    </>
  );
};

export default Customer;
