import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FormControlLabel, Checkbox, Typography } from '@mui/material';

const ConfirmPage = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const address = params.get('address');
    const time = params.get('time');
    const date = params.get('date');
    const selectedPackage = params.get('selectedPackage');
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
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
            <div style={{ marginBottom: '20px', fontSize: '24px' }}>Xác nhận thông tin đặt lịch</div>
            <div style={{ marginBottom: '10px' }}>Địa chỉ: {address}</div>
            <div style={{ marginBottom: '10px' }}>Thời gian làm việc: {time}</div>
            <div style={{ marginBottom: '10px' }}>Ngày bắt đầu: {date}</div>
            <div style={{ marginBottom: '10px' }}>Gói dịch vụ: {selectedPackage}</div>
            <div style={{ marginBottom: '20px' }}>
                <img src="path_to_your_image" alt="Gói dịch vụ" style={{ width: '300px' }} />
            </div>
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
            <Link to="/booking" style={{ textDecoration: 'none' }}>
                <button
                    style={{
                        width: '300px',
                        padding: '10px',
                        marginTop: '20px',
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
                        width: '300px',
                        padding: '10px',
                        marginTop: '20px',
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
    );
};

export default ConfirmPage;
