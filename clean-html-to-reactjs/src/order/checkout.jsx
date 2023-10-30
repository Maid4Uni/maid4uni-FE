import React, { useState } from "react";
import {
    Container,
    TextField,
    Typography,
    Box,
    Button,
    FormControl,
    Grid,
    Checkbox,
    FormControlLabel,
} from "@mui/material";
import { Link } from "react-router-dom";

const ConfirmationPage = () => {
    const [isDirectPayment, setIsDirectPayment] = useState(false);
    const [isVNPay, setIsVNPay] = useState(false);
    const handleDirectPaymentChange = (event) => {
        if (event.target.checked) {
            setIsDirectPayment(true);
            setIsVNPay(false);
        } else {
            setIsDirectPayment(false);
        }
    };

    const handleVNPayChange = (event) => {
        if (event.target.checked) {
            setIsVNPay(true);
            setIsDirectPayment(false);
        } else {
            setIsVNPay(false);
        }
    }
    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h2" align="center" gutterBottom marginTop="20px">
                Xác Nhận Thanh Toán
            </Typography>
            <Box
                component="form"
                noValidate
                sx={{
                    mt: 3,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <img
                                src=".\img\pexels-liliana-drew-9462143.jpg"
                                alt="Gói Dịch Vụ"
                                style={{ width: "100%" }}
                            />
                            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                                Tên Gói Dịch Vụ
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>

                            <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField
                                    id="workLocation"
                                    label="Vị trí làm việc"
                                    variant="outlined"
                                    InputProps={{ disableUnderline: true }}
                                    required
                                />
                            </FormControl>
                            <Box sx={{ my: 3 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="startDate"
                                            label="Ngày Bắt Đầu"
                                            type="date"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            fullWidth
                                            InputProps={{ disableUnderline: true }}
                                        />
                                    </Grid>
                                    <Grid item xs={6}>
                                        <TextField
                                            id="endDate"
                                            label="Ngày Kết Thúc"
                                            type="date"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            fullWidth
                                            InputProps={{ disableUnderline: true }}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField
                                    id="workTime"
                                    label="Giờ Làm"
                                    variant="outlined"
                                    InputProps={{ disableUnderline: true }}
                                    required
                                />
                            </FormControl>
                            <FormControl sx={{ m: 1 }}>
                                <FormControlLabel
                                    control={<Checkbox />}
                                    label="Thanh Toán Trực Tiếp"
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <TextField
                                    id="refundPolicy"
                                    label="Chính Sách Hoàn Tiền"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    InputProps={{ disableUnderline: true }}
                                    required
                                />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1 }}>
                                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                    Giá Tiền
                                </Typography>
                                <TextField
                                    id="price"
                                    label="Giá Tiền"
                                    variant="outlined"
                                    InputProps={{ disableUnderline: true }}
                                    required
                                />
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox checked={isDirectPayment} onChange={handleDirectPaymentChange} />}
                                label="Thanh toán trực tiếp"
                                style={{ marginBottom: '20px' }}
                            />
                            <FormControlLabel
                                control={<Checkbox checked={isVNPay} onChange={handleVNPayChange} />}
                                label="VNPay"
                                style={{ marginBottom: '20px' }}
                            />
                            {(isDirectPayment || isVNPay) && (
                                <div>
                                    <Typography variant="h6" style={{ marginTop: '20px' }}>
                                        {isDirectPayment ? 'Phương thức thanh toán trực tiếp' : 'Phương thức thanh toán VNPay'}
                                    </Typography>
                                </div>
                            )}
                            <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
                                <Link to="/booking" style={{ textDecoration: 'none' }}>
                                    <button
                                        style={{
                                            width: '140px',
                                            padding: '10px',
                                            backgroundColor: '#4caf50',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Quay lại
                                    </button>
                                </Link>
                                <Link to="/booking" style={{ textDecoration: 'none' }}>
                                    <button
                                        style={{
                                            width: '140px',
                                            padding: '10px',
                                            backgroundColor: '#4caf50',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '4px',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Thanh toán
                                    </button>
                                </Link>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ConfirmationPage;