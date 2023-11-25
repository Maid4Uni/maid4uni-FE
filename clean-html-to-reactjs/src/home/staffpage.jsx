
import api from "../config/api";
import { useNavigate, useParams } from "react-router-dom";
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
import UserProfile from "./profile";
import { useState } from "react";
import MyCalendar from "./staff";




const Staff = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
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
  const [isMenu, setMenu] = useState("calendar");



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
            {user ? user.username : "Staff"}
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
                onClick={() => setMenu("calendar")}
                selected={isMenu === "calender"}
              >
                <ListItemIcon>
                  <LocalOfferIcon />
                </ListItemIcon>
                <ListItemText primary="Lịch làm việc" />
              </ListItemButton>
              <ListItemButton
                onClick={() => setMenu("profile")}
                selected={isMenu === "profile"}
              >
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Cài đặt tài khoản" />
              </ListItemButton>
              
            </List>
          </Drawer>

          <Box
            sx={{
              width: "100%",
              padding: 2,
            }}
          >
            {isMenu === "calendar" && <MyCalendar/>}
            {isMenu === "profile" && <UserProfile/>}
          </Box>
        </Box>
      </Container>
     
    </>
  );
};

export default Staff;
