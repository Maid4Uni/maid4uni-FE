import React from "react";
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

const ConfirmationPage = () => {
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
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Thanh Toán
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default ConfirmationPage;
