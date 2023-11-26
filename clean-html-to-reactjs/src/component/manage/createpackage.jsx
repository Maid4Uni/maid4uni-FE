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
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";

const CreatePackage = () => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [services, setServices] = useState([]);
    const navigate = useNavigate();
  

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
    const formik = useFormik({
        initialValues: {
            name: "",
            creator: user ? user.username : '',
            category: "COMBO1",
            serviceList: [],
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required("Tên gói dịch vụ không được bỏ trống")
                .min(5, "Tên gói dịch vụ ít nhất 5 kí tự"),
            description: Yup.string()
                .required("Thêm mô tả gói dịch vụ")
                .min(10, "Mô tả nhiều hơn 10 kí tự"),
            imageUrl: Yup.string().required("Thêm link hình ảnh cho gói dịch vụ"),
        }),
        onSubmit: async (values, { resetForm }) => {
            try {
                console.log("Data to be sent:", values);
                await api.createPackage(values); // Đảm bảo gọi API tạo package ở đây
                handleOpenDialog();
                handleRedirect();
                resetForm();
            } catch (error) {
                console.error("Error creating package:", error);
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else {
                    console.log("Network error:", error.message);
                }
            }
        },
    });


    return (
        <Box maxWidth="400px" mx="auto" p={3} border="1px solid #e0e0e0" borderRadius={8} marginTop={4}>
            {successMessage && (
                <Typography variant="subtitle1">{successMessage}</Typography>
            )}
            <Typography variant="h4" mb={2} >
                Tạo gói dịch vụ
            </Typography>
            <Formik {...formik}>
                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        formik.handleSubmit();
                    }}
                >
                    <Box mb={2}>
                        <div style={{ marginBottom: '16px' }}>
                            <label htmlFor="name">Tên gói dịch vụ</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
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
                            {formik.touched.name && formik.errors.name && (
                                <Typography variant="subtitle2" color="error">
                                    {formik.errors.name}
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
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
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
                            {formik.touched.category && formik.errors.category && (
                                <Typography variant="subtitle2" color="error">
                                    {formik.errors.category}
                                </Typography>
                            )}
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <label htmlFor="creator">Người tạo</label>
                            <input
                                type="text"
                                id="creator"
                                name="creator"
                                value={user ? user.username : ''}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
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
                            {formik.touched.creator && formik.errors.creator && (
                                <Typography variant="subtitle2" color="error">
                                    {formik.errors.creator}
                                </Typography>
                            )}
                        </div>

                    </Box>
                    <Box mb={2}>
                        <FormControl fullWidth margin="normal">
                            <Select
                                multiple
                                autoComplete="off"
                                name="serviceList"
                                value={selectedServices}
                                onChange={(event) => {
                                    const selectedOptions = Array.isArray(event.target.value)
                                        ? event.target.value
                                        : [];
                                    setSelectedServices(selectedOptions);

                                    // Thay đổi giá trị của serviceList trong formik.values
                                    formik.setFieldValue(
                                        "serviceList",
                                        selectedOptions.map((id) => ({ id }))
                                    );
                                }}
                                variant="outlined"
                                displayEmpty
                            >
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
                            onClick={() => {
                                formik.handleSubmit();
                            }}
                        >
                            Tạo
                        </Button>
                    </Box>
                </Form>
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


    );
};

export default CreatePackage;
