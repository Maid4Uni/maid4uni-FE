import React, { useState, useEffect } from "react";
import {
    Box,
    TextField,
    Button,
    Typography,
    FormControl,
    Select,
    MenuItem,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    AppBar,
    Toolbar,
    Menu,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";

const CreatePackage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedServices, setSelectedServices] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [services, setServices] = useState([]);
    const navigate = useNavigate();
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleMenuClose = () => {
        navigate("/manager/package/0")
        setAnchorEl(null);
      };
      const handleLogout = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        navigate("/");
      };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.getAllService(currentPage);
                setServices(response.data || []);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [currentPage]);
    const user = JSON.parse(localStorage.getItem("user"));
    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleRedirect = () => {
        navigate("/manager/package/0")
    };



    return (
        <>
            <AppBar position="static">
                <Toolbar>
                   
                    
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

            <Box maxWidth="400px" mx="auto" p={3} border="1px solid #e0e0e0" borderRadius={8} marginTop={4}>
                {successMessage && (
                    <Typography variant="subtitle1">{successMessage}</Typography>
                )}
                <Typography variant="h4" mb={2} >
                    Tạo gói dịch vụ
                </Typography>
                <Formik
                    initialValues={{
                        name: "",
                        creator: {
                            id: user.id, // Sử dụng ID từ người dùng đăng nhập
                            username: user ? user.username : "", // Tên người dùng
                        },
                        category: "COMBO1",
                        serviceList: [],
                    }}
                    validationSchema={Yup.object().shape({
                        name: Yup.string()
                            .required("Tên gói dịch vụ không được bỏ trống")
                            .min(5, "Tên gói dịch vụ ít nhất 5 kí tự"),
                        // Thêm validation cho các trường khác nếu cần
                    })}
                    onSubmit={async (values, { resetForm }) => {
                        try {
                            console.log("Data to be sent:", values);
                            // Gọi hàm createPackage từ api
                            await api.createPackage(values); // Đảm bảo gọi API tạo package ở đây
                            handleOpenDialog();
                            handleRedirect();
                            resetForm();
                        } catch (error) {
                            console.error("Error creating package:", error);
                            // Xử lý lỗi khi tạo gói dịch vụ
                        }
                    }}
                >
                    {({ handleSubmit, handleChange, handleBlur, values, touched, errors, setFieldValue }) => (
                        <Form onSubmit={handleSubmit}>
                            <Box mb={2}>
                                <div style={{ marginBottom: '16px' }}>
                                    <label htmlFor="name">Tên gói dịch vụ</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            width: '100%',
                                            padding: '8px',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px',
                                            boxSizing: 'border-box',
                                            marginBottom: '8px',
                                        }}
                                        autoComplete="off"
                                    />
                                    {touched.name && errors.name && (
                                        <Typography variant="subtitle2" color="error">
                                            {errors.name}
                                        </Typography>
                                    )}
                                </div>
                            </Box>
                            <Box mb={2}>
                                <div style={{ marginBottom: '16px' }}>
                                    <label htmlFor="category">Nhóm gói dịch vụ</label>
                                    <input
                                        type="text"
                                        id="category"
                                        name="category"
                                        value={values.category}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={{
                                            width: '100%',
                                            padding: '8px',
                                            border: '1px solid #ccc',
                                            borderRadius: '4px',
                                            boxSizing: 'border-box',
                                            marginBottom: '8px',
                                        }}
                                        autoComplete="off"
                                    />
                                    {touched.category && errors.category && (
                                        <Typography variant="subtitle2" color="error">
                                            {errors.category}
                                        </Typography>
                                    )}
                                </div>

                                <input
                                    type="hidden"
                                    id="creatorId"
                                    name="creator.id"
                                    value={user ? user.id : ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />

                                <Typography variant="subtitle1">
                                    Người tạo: {user ? user.username : ''}
                                </Typography>

                            </Box>
                            <Box mb={2}>

                                <FormControl fullWidth margin="normal">
                                    <Select
                                        multiple
                                        name="serviceList"
                                        value={values.serviceList.map(service => service.id)} // Set value to the array of selected service IDs
                                        onChange={(event) => {
                                            const selectedServiceIds = event.target.value;
                                            const selectedServices = services.filter((service) =>
                                                selectedServiceIds.includes(service.id)
                                            );
                                            setFieldValue("serviceList", selectedServices); // Update Formik's state with selected services
                                        }}
                                    // ... other props
                                    >
                                        {/* Map over services to populate the Select */}
                                        {services.map((service) => (
                                            <MenuItem key={service.id} value={service.id}>
                                                {service.name}
                                            </MenuItem>
                                        ))}
                                    </Select>




                                </FormControl>
                            </Box>
                            <Box textAlign="center">
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                >
                                    Tạo
                                </Button>
                            </Box>
                        </Form>
                    )}
                </Formik>


                <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                    <DialogTitle>Notification</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {successMessage}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleCloseDialog} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>

            </Box >
        </>

    );
};

export default CreatePackage;
