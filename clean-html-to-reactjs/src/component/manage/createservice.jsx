import React from "react";
import {
    Box,
    Typography,
    TextField,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";

const CreateService = () => {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const navigate = useNavigate();

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <Box maxWidth="400px" mx="auto" p={3} border="1px solid #e0e0e0" borderRadius={8} marginTop={4}>
            <Typography variant="h4" mb={2}>
                Tạo gói dịch vụ
            </Typography>
            <Formik
                initialValues={{
                    name: "",
                    creator: user && user.username ? user.username : "",
                    price: 0,
                    description: "",
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .required("Tên gói dịch vụ không được bỏ trống")
                        .min(5, "Tên gói dịch vụ ít nhất 5 kí tự"),
                })}
                onSubmit={async (values, { resetForm }) => {
                    try {
                        await api.createService(values); // Call the API to create the service
                        handleOpenDialog();
                        navigate("/manager/package/0");
                        resetForm();
                    } catch (error) {
                        console.error("Error creating package:", error);
                        // Handle errors here
                    }
                }}
            >
                {({ values, handleChange, handleBlur, handleSubmit, touched, errors }) => (
                    <Form onSubmit={handleSubmit}>
                        <Box mb={2}>
                            <div style={{ marginBottom: '16px' }}>
                                <label htmlFor="name">Tên gói dịch vụ</label>
                                <input
                                    id="name"
                                    name="name"
                                    label="Tên gói dịch vụ"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    error={touched.name && !!errors.name}
                                    helperText={touched.name && errors.name}
                                />

                            </div>
                        </Box>
                        <Box mb={2}>
                            <div style={{ marginBottom: '16px' }}>
                                <label htmlFor="price">Giá:</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    label="Giá dịch vụ"
                                    value={values.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    error={touched.price && !!errors.price}
                                    helperText={touched.price && errors.price}></input>
                            </div>

                            <div style={{ marginBottom: '16px' }}>
                                <label htmlFor="creator">Người tạo</label>
                                <input
                                    type="text"
                                    id="creator"
                                    name="creator"
                                    value={user ? user.username : ''}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    disabled
                                    error={touched.creator && !!errors.creator}
                                    helperText={touched.creator && errors.creator} />
                            </div>
                            <div style={{ marginBottom: '16px' }}>
                                <label htmlFor="description">Miêu tả dịch vụ</label>
                                <input
                                    type="text"
                                    id="description"
                                    name="description"
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    fullWidth
                                    error={touched.description && !!errors.description}
                                    helperText={touched.description && errors.description} />
                            </div>
                        </Box>

                        <Box textAlign="center">
                            <Button type="submit" variant="contained" color="primary">
                                Tạo
                            </Button>
                        </Box>
                    </Form>
                )}
            </Formik>
            <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                <DialogTitle>Notification</DialogTitle>
                <DialogContent>
                    <DialogContentText>Gói dịch vụ đã được tạo thành công</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default CreateService;
