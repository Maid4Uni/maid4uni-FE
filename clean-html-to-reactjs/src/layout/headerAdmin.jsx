import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import api from "../config/api";
const HeaderAdmin = (props) => {
  const navigate = useNavigate();
  const { handleActiveTab } = props;
  const [isTab, setTab] = useState("list");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen((prevDrawerOpen) => !prevDrawerOpen);
  };

  const handleTabClick = (tab) => {
    handleActiveTab(tab === "list");
    setTab(tab);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <img
              className="logo"
              style={{
                marginTop: "10px",
                width: "150px",
                height: "auto",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
              src={
                process.env.PUBLIC_URL +
                "/img/Brown Gradient Dreamy Abstract Font Album Cover (1).png"
              }
              alt="M4U logo"
              loading="lazy"
            />
          </Link>
          <div style={{ marginLeft: "auto" }}>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <Avatar
                alt="Admin"
                src="img/1.jpg"
                sx={{ width: 32, height: 32 }}
              />
            </IconButton>
            <Menu
              id="profile-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <ExitToAppIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Đăng xuất" />
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "block" } }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <List>
          <ListItemButton
            selected={isTab === "list"}
            onClick={() => handleTabClick("list")}
          >
            <ListItemIcon>
              <i className="fa fa-sharp fa-light fa-table me-3"></i>
            </ListItemIcon>
            <ListItemText primary="Danh sách tài khoản" />
          </ListItemButton>

          <ListItemButton
            selected={isTab === "create"}
            onClick={() => handleTabClick("create")}
          >
            <ListItemIcon>
              <i className="fa fa-sharp fa-light fa-table me-3"></i>
            </ListItemIcon>
            <ListItemText primary="Tạo tài khoản" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
};

export default HeaderAdmin;
