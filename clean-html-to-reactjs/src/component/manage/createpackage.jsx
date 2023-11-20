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
import { Link } from "react-router-dom";

const CreatePackage = () => {
    const [selectedServices, setSelectedServices] = useState([]);
    const [successMessage, setSuccessMessage] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [services, setServices] = useState([]);

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

    const formik = useFormik({
        initialValues: {
            name: "",
            price: 0,
            description: "",
            creator: user ? user.name:'',
            category: "COMBO1",
            imageUrl: "",
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
                await api.createPackage(values);
                resetForm();
            } catch (error) {
                console.error("Error creating package:", error);
            }
        },
    });

    return (
        <Box maxWidth="400px" mx="auto" p={3}>
            {successMessage && (
                <Typography variant="subtitle1">{successMessage}</Typography>
            )}
            <Typography variant="h4" mb={2}>
                Tạo gói dịch vụ
            </Typography>
            <Formik {...formik}>
                <Form
                    onSubmit={(e) => {
                        e.preventDefault();
                        formik.handleSubmit();
                    }}
                >
                    <TextField
                        label="Tên gói dịch vụ"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    {formik.touched.name && formik.errors.name && (
                        <Typography variant="subtitle2" color="error">
                            {formik.errors.name}
                        </Typography>
                    )}

                    <TextField
                        label="Mô tả gói dịch vụ"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    {formik.touched.description && formik.errors.description && (
                        <Typography variant="subtitle2" color="error">
                            {formik.errors.description}
                        </Typography>
                    )}
                    <TextField
                        name="imageUrl"
                        type="file"
                        value={formik.values.imageUrl}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    {formik.touched.imageUrl && formik.errors.imageUrl && (
                        <Typography variant="subtitle2" color="error">
                            {formik.errors.imageUrl}
                        </Typography>
                    )}
                    <TextField
                        label="Nhóm gói dịch vụ"
                        name="category"
                        value={formik.values.category}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Người tạo"
                        name="creator"
                        value={user ? user.name:""}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    {formik.touched.creator && formik.errors.creator && (
                        <Typography variant="subtitle2" color="error">
                            {formik.errors.creator}
                        </Typography>
                    )}
                    <FormControl fullWidth margin="normal">
                        <Select
                            multiple
                            name="serviceList"
                            value={selectedServices}
                            onChange={(event) => {
                                const selectedOptions = Array.isArray(event.target.value)
                                    ? event.target.value
                                    : [];
                                setSelectedServices(selectedOptions);
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
                    <Button type="submit" variant="contained" color="primary">
                        Tạo
                    </Button>
                </Form>
            </Formik>
            {/* <Dialog open={open} onClose={handleClose}>
                <DialogTitle id="alert-dialog-title">Notification</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Alert severity='success'>
                            <AlertTitle>Success</AlertTitle>
                            New User has been added successfully!
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Link to='/manager/package/                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      '>
                        <Button onClick={handleClose} autoFocus>
                            Dashboard
                        </Button>
                    </Link>
                </DialogActions>
            </Dialog> */}
        </Box>
    );
};

export default CreatePackage;
