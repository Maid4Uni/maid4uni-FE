import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
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
=======

>>>>>>> hh

const HeaderAdmin = (props) => {
  const navigate = useNavigate();
  const { handleActiveTab } = props;
  const [isTab, setTab] = useState("list");
<<<<<<< HEAD
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

=======

  const user = JSON.parse(localStorage.getItem("user"));
>>>>>>> hh
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/");
  };

<<<<<<< HEAD
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
              style={{ marginTop: "10px" }}
              src="img/Brown Gradient Dreamy Abstract Font Album Cover (1).png"
              height="40"
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
              <MenuItem>
                <ListItemIcon>
                  <AccountCircleIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Tài khoản" />
              </MenuItem>
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
        sx={{ display: { xs: "block", md: "none" } }}
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
=======
  return (
    <>
      <header>
        <nav
          id="sidebarMenu"
          style={{
            width: "230px",
            paddingTop: "80px",
            height: "100vh",
            position: "absolute",
            left: 0,
            zIndex: "0",
          }}
          className="collapse d-lg-block sidebar collapse bg-white"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-0 mt-4">
              <div
                onClick={() => {
                  handleActiveTab(true);
                  setTab("list");
                }}
                className="list-group-item list-group-item-action py-2 ripple"
                style={
                  isTab === "list"
                    ? {
                        backgroundColor: "#f2d790",
                        borderLeft: "3px solid #fa8f43",
                      }
                    : {}
                }
                aria-current="true"
              >
                <i className="fa fa-sharp fa-light fa-table me-3"></i>
                <span>Danh sách tài khoản</span>
              </div>

              <div
                onClick={() => {
                  handleActiveTab(false);
                  setTab("create");
                }}
                style={
                  isTab === "create"
                    ? {
                        backgroundColor: "#f2d790",
                        borderLeft: "3px solid #fa8f43",
                      }
                    : {}
                }
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fa fa-sharp fa-light fa-table me-3"></i>
                <span>Tạo tài khoản</span>
              </div>
            </div>
          </div>
        </nav>

        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            <Link className="navbar-brand" to="/">
              <img
                style={{ marginTop: "10px" }}
                src="img/Brown Gradient Dreamy Abstract Font Album Cover (1).png"
                height="40"
                alt="MDB Logo"
                loading="lazy"
              />
            </Link>
            <div
              style={{
                width: "450px",
                justifyContent: "space-between",
                display: "flex",
              }}
            >
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-label="Toggle navigation"
              >
                <i className="ri-menu-3-line"></i>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                style={{ width: "100%" }}
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item nav-icon dropdown caption-content">
                    <a
                      href="#"
                      className="search-toggle dropdown-toggle  d-flex align-items-center"
                      id="dropdownMenuButton4"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        style={{ width: "40px" }}
                        src="img/1.jpg"
                        className="img-fluid rounded-circle"
                        alt="user"
                      />
                      <div className="caption ml-3">
                        <h6 className="mb-0 line-height">
                          {user ? user.username : "Admin"}
                          <i className="las la-angle-down ml-2"></i>
                        </h6>
                      </div>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-right border-none"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li className="dropdown-item d-flex svg-icon">
                        <svg
                          className="svg-icon mr-0 text-primary"
                          id="h-01-p"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <a href="../app/user-profile.html">Tài khoản</a>
                      </li>

                      <li className="dropdown-item d-flex svg-icon">
                        <svg
                          className="svg-icon mr-0 text-primary"
                          id="h-03-p"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <a href="../app/user-account-setting.html">
                          Cài đặt
                        </a>
                      </li>

                      <li className="dropdown-item  d-flex svg-icon border-top">
                        <svg
                          className="svg-icon mr-0 text-primary"
                          id="h-05-p"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          />
                        </svg>
                        <Link to={"/"} onClick={handleLogout}>
                          Đăng xuất
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
>>>>>>> hh
    </>
  );
};

export default HeaderAdmin;
