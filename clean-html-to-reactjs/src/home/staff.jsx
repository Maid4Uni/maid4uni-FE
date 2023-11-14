import React, { useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { AppBar, Button, Menu, MenuItem, Toolbar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import api from "../config/api";

function Calendar() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);
    const data = async (values) => {
        try {
            const response = await api.login(values);
            localStorage.setItem("accessToken", response.data.accessToken);
            localStorage.setItem("user", JSON.stringify(response.data.account));
            navigate("/staff");
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

  

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <AppBar position="static"  sx={{marginBottom:"20px"}}>
                <Toolbar>
                   
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
            <Fullcalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                    start: "today prev,next",
                    center: "title",
                    end: "dayGridMonth,timeGridWeek,timeGridDay",
                }}
                height={"90vh"}
            />
        </div>
    );
}

export default Calendar;