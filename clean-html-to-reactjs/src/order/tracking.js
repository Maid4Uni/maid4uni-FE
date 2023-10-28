import React, { useState } from "react";
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
    Stepper,
    Step,
    StepLabel,
    Button,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from "@mui/material";
import ReorderIcon from '@mui/icons-material/Reorder';
import { ArrowDropDown } from "@mui/icons-material";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import HistoryIcon from '@mui/icons-material/History';
import { Link } from "react-router-dom";
const steps = ["Ordered", "Accepted", "Payed", "On-going Process", "Done"];
const TrackingPage = () => {
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
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
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
            <Box sx={{ width: "100%", marginTop: "50px" }}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography sx={{ mt: 2, mb: 1 }}>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Button onClick={handleReset}>Reset</Button>
                        </div>
                    ) : (
                        <div>
                            <Typography sx={{ mt: 2, mb: 1 }}>{steps[activeStep]}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 1, mr: 1 }}
                                >
                                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                                </Button>
                                {activeStep !== 0 && (
                                    <Button variant="contained" onClick={handleBack} sx={{ mt: 1 }}>
                                        Back
                                    </Button>
                                )}
                            </Box>
                        </div>
                    )}
                </Box>
            </Box>
            <Box sx={{ mx: 4 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Ngày cập nhật</TableCell>
                                <TableCell>Nhân viên</TableCell>
                                <TableCell>Ghi chú</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>20/10/2022</TableCell>
                                <TableCell>Nguyen Thi A</TableCell>
                                <TableCell>Xong buổi 1</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button variant="contained" sx={{ mt: 2 }}>
                    Feedback
                </Button>
            </Box>
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

export default TrackingPage;
