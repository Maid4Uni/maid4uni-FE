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
  console.log(services);

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
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await api.createPackage({
        packageName: values.name,
        packagePrice: values.price,
        packageDescription: values.description,
        packageCategory: values.category,
        packageImageURL: values.imageUrl,
        serviceList: values.serviceList, // Giả sử serviceList là một mảng các ID dịch vụ
      });
      setSelectedServices([]);
      console.log("Package created:", response.data);
      setSuccessMessage("Package created successfully!");
      resetForm();
    } catch (error) {
      console.error("Error creating package:", error);
    } finally {
      setSubmitting(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      price: 0,
      description: "",
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
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const response = await api.createPackage(values);
        console.log("Package created:", response.data);
        setSuccessMessage("Package created successfully!");
        resetForm(); // Reset form after successful submission
      } catch (error) {
        console.error("Error creating package:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });
  const handleChange = async (e) => {
    const selectedOptions = e.target.selectedOptions;

    if (selectedOptions && selectedOptions.length > 0) {
      const selectedServiceId = selectedOptions[0].value;
      setSelectedServices([selectedServiceId]);
    } else {
      setSelectedServices([]);
    }
  };

  return (
    <Box maxWidth="400px" mx="auto" p={3}>
      {successMessage && (
        <Typography variant="subtitle1">{successMessage}</Typography>
      )}
      <Typography variant="h4" mb={2}>
        Create Package
      </Typography>
      <Formik {...formik}>
        <Form>
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
            label="Hình ảnh"
            name="imageUrl"
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

          <FormControl fullWidth margin="normal">
            <Select
              multiple
              value={selectedServices}
              onChange={handleChange}
              variant="outlined"
              displayEmpty
            >
              <MenuItem value="" disabled>
                Chọn dịch vụ
              </MenuItem>
              {services.map((service) => (
                <MenuItem key={service.id} value={service.id}>
                  {service.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            onClick={handleSubmit}
            type="submit"
            disabled={formik.isSubmitting}
            variant="contained"
            color="primary"
          >
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
