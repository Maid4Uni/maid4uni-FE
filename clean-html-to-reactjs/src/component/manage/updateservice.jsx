import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
} from "@mui/material";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    height: "70%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "15px",
    p: 2,
    border: "none",
    overflow: "hidden",
};

const Update = ({
    dataPackage,
    handleClose,

}) => {
    const navigate = useNavigate();
    const [successMessage, setSuccessMessage] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const handleSubmit = async (values) => {
        try {
            await api.updateService(values.id, values);
            setSuccessMessage("Chỉnh sửa thành công!");
            setIsDialogOpen(true);
            handleClose();
        } catch (error) {
            // Handle error appropriately
        }
    };
    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

    const handleRedirectAfterClose = () => {
        setIsDialogOpen(false);
        navigate("/manager/package/0")
    };

    const formik = useFormik({
        initialValues: {
            id: dataPackage?.id || "",
            name: dataPackage?.name || "",
            price: dataPackage?.price || "",
            description: dataPackage?.description || "",
        },
        onSubmit: (values) => {
            handleSubmit(values);
        },
        validationSchema: Yup.object().shape({
            name: Yup.string()
                .required("Nhập tên gói dịch vụ")
                .min(5, "Tối thiểu ít nhất 5 kí tự"),
            price: Yup.number()
                .required("Đừng bỏ trống giá gói dịch vụ")
                .min(0, "Giá tiền phải lớn hơn >=0"),
        }),
        enableReinitialize: true,
    });

    useEffect(() => {
        const selectedService = JSON.parse(localStorage.getItem('selectedService'));
        if (selectedService) {
            formik.setValues({
                id: selectedService.id || '',
                name: selectedService.name || '',
                price: selectedService.price || '',
                description: selectedService.description || '',
            });
        }
    }, [localStorage.getItem('selectedService')]);

    return (
        <div>
            <Box sx={style}>
                <Typography variant="h4" component={"h5"} textAlign={"center"}>
                    Chỉnh sửa gói dịch vụ
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <label htmlFor="name">Tên dịch vụ</label>
                    <input
                        type="text"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Tên gói dịch vụ"
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            fontSize: "16px",
                            marginBottom: "10px",
                        }}
                    />
                    {formik.errors.name && formik.touched.name && (
                        <Typography variant="subtitle2" color={"red"}>
                            {formik.errors.name}
                        </Typography>
                    )}
                    <label htmlFor="price">Giá dịch vụ</label>

                    <input
                        type="number"
                        name="price"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Nhập giá"
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            fontSize: "16px",
                            marginBottom: "10px",
                        }}
                    />
                    {formik.errors.price && formik.touched.price && (
                        <Typography variant="subtitle2" color={"red"}>
                            {formik.errors.price}
                        </Typography>
                    )}
                    <label htmlFor="description">Miêu tả dịch vụ</label>

                    <input
                        type="text"
                        name="description"
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Nhập giá"
                        style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "5px",
                            border: "1px solid #ccc",
                            fontSize: "16px",
                            marginBottom: "10px",
                            height: "100px", // Adjust height as needed
                            resize: "vertical",
                        }}
                    />
                    {formik.errors.description && formik.touched.description && (
                        <Typography variant="subtitle2" color={"red"}>
                            {formik.errors.description}
                        </Typography>
                    )}

                    <Box display="flex" justifyContent="space-between">
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            onClick={() => {
                                handleSubmit(formik.values);
                            }}
                        >
                            Chỉnh sửa
                        </Button>
                        <Button
                            onClick={handleRedirectAfterClose}
                            variant="contained"
                            size="large"
                        >
                            Hủy
                        </Button>
                    </Box>
                </form>
                <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
                    <DialogTitle>Thông báo</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {successMessage}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleRedirectAfterClose} color="primary">
                            Đóng
                        </Button>
                    </DialogActions>
                </Dialog>
            </Box>
        </div>
    );
};

export default Update;
